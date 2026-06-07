import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { supabase } from "../config/supabase";
import { env } from "../config/env";
import { HttpException } from "../common/filters/http-exception.filter";
import type { RegisterDto, LoginDto, AuthResponse } from "./auth.dto";

export class AuthService {
  async register(dto: RegisterDto): Promise<AuthResponse> {
    const { data: existing } = await supabase
      .from("users")
      .select("id")
      .eq("email", dto.email)
      .single();

    if (existing) {
      throw new HttpException(409, "Email already registered");
    }

    const hashedPassword = await bcrypt.hash(dto.password, 12);

    const { data: user, error } = await supabase
      .from("users")
      .insert({
        first_name: dto.firstName,
        last_name: dto.lastName,
        email: dto.email,
        password_hash: hashedPassword,
        company: dto.company || null,
        role: "customer",
      })
      .select("id, email, first_name, last_name, role")
      .single();

    if (error || !user) {
      throw new HttpException(500, error?.message || "Registration failed");
    }

    const token = this.generateToken(user);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role,
      },
      token,
    };
  }

  async login(dto: LoginDto): Promise<AuthResponse> {
    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("email", dto.email)
      .single();

    if (!user) {
      throw new HttpException(401, "Invalid email or password");
    }

    const valid = await bcrypt.compare(dto.password, user.password_hash);

    if (!valid) {
      throw new HttpException(401, "Invalid email or password");
    }

    const token = this.generateToken(user);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role,
      },
      token,
    };
  }

  private generateToken(user: {
    id: string;
    email: string;
    role: string;
  }): string {
    const expiresInSeconds = 7 * 24 * 60 * 60;
    return jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      env.jwtSecret,
      { expiresIn: expiresInSeconds }
    );
  }
}
