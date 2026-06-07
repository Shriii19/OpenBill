import bcrypt from "bcryptjs";
import { supabase } from "../config/supabase";
import { HttpException } from "../common/filters/http-exception.filter";
import type { CreateUserDto, UpdateUserDto, UserResponse } from "./users.dto";

export class UsersService {
  async findAll(page = 1, limit = 20) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, count, error } = await supabase
      .from("users")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) throw new HttpException(500, error.message);

    return {
      users: data.map(this.mapUser),
      total: count || 0,
      page,
      limit,
    };
  }

  async findById(id: string): Promise<UserResponse> {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      throw new HttpException(404, "User not found");
    }

    return this.mapUser(data);
  }

  async create(dto: CreateUserDto): Promise<UserResponse> {
    const hashedPassword = await bcrypt.hash(dto.password, 12);

    const { data, error } = await supabase
      .from("users")
      .insert({
        first_name: dto.firstName,
        last_name: dto.lastName,
        email: dto.email,
        password_hash: hashedPassword,
        role: dto.role || "customer",
        company: dto.company || null,
      })
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapUser(data);
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserResponse> {
    const updates: Record<string, unknown> = {};

    if (dto.firstName) updates.first_name = dto.firstName;
    if (dto.lastName) updates.last_name = dto.lastName;
    if (dto.email) updates.email = dto.email;
    if (dto.company !== undefined) updates.company = dto.company;

    const { data, error } = await supabase
      .from("users")
      .update(updates)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapUser(data);
  }

  async remove(id: string): Promise<void> {
    const { error } = await supabase.from("users").delete().eq("id", id);
    if (error) throw new HttpException(500, error.message);
  }

  private mapUser(data: any): UserResponse {
    return {
      id: data.id,
      email: data.email,
      firstName: data.first_name,
      lastName: data.last_name,
      role: data.role,
      company: data.company,
      createdAt: data.created_at,
    };
  }
}
