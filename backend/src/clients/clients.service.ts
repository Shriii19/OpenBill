import { supabase } from "../config/supabase";
import { HttpException } from "../common/filters/http-exception.filter";
import type { CreateClientDto, UpdateClientDto, ClientResponse } from "./clients.dto";

export class ClientsService {
  async findAll(page = 1, limit = 20, search?: string) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from("clients")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false });

    if (search) {
      query = query.or(
        `first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%`
      );
    }

    const { data, count, error } = await query.range(from, to);

    if (error) throw new HttpException(500, error.message);

    return {
      clients: data.map(this.mapClient),
      total: count || 0,
      page,
      limit,
    };
  }

  async findById(id: string): Promise<ClientResponse> {
    const { data, error } = await supabase
      .from("clients")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) throw new HttpException(404, "Client not found");
    return this.mapClient(data);
  }

  async create(dto: CreateClientDto): Promise<ClientResponse> {
    const { data, error } = await supabase
      .from("clients")
      .insert({
        first_name: dto.firstName,
        last_name: dto.lastName,
        email: dto.email,
        phone: dto.phone || null,
        company: dto.company || null,
        address: dto.address || null,
        city: dto.city || null,
        state: dto.state || null,
        zip: dto.zip || null,
        country: dto.country || null,
      })
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapClient(data);
  }

  async update(id: string, dto: UpdateClientDto): Promise<ClientResponse> {
    const updates: Record<string, unknown> = {};
    if (dto.firstName) updates.first_name = dto.firstName;
    if (dto.lastName) updates.last_name = dto.lastName;
    if (dto.email) updates.email = dto.email;
    if (dto.phone !== undefined) updates.phone = dto.phone;
    if (dto.company !== undefined) updates.company = dto.company;
    if (dto.address !== undefined) updates.address = dto.address;
    if (dto.city !== undefined) updates.city = dto.city;
    if (dto.state !== undefined) updates.state = dto.state;
    if (dto.zip !== undefined) updates.zip = dto.zip;
    if (dto.country !== undefined) updates.country = dto.country;

    const { data, error } = await supabase
      .from("clients")
      .update(updates)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapClient(data);
  }

  async remove(id: string): Promise<void> {
    const { error } = await supabase.from("clients").delete().eq("id", id);
    if (error) throw new HttpException(500, error.message);
  }

  private mapClient(data: any): ClientResponse {
    return {
      id: data.id,
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      country: data.country,
      createdAt: data.created_at,
    };
  }
}
