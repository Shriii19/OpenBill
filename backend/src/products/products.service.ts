import { supabase } from "../config/supabase";
import { HttpException } from "../common/filters/http-exception.filter";
import type { CreateProductDto, UpdateProductDto, ProductResponse } from "./products.dto";

export class ProductsService {
  async findAll(page = 1, limit = 20, category?: string) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from("products")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false });

    if (category) {
      query = query.eq("category", category);
    }

    const { data, count, error } = await query.range(from, to);

    if (error) throw new HttpException(500, error.message);

    return {
      products: data.map(this.mapProduct),
      total: count || 0,
      page,
      limit,
    };
  }

  async findById(id: string): Promise<ProductResponse> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) throw new HttpException(404, "Product not found");
    return this.mapProduct(data);
  }

  async create(dto: CreateProductDto): Promise<ProductResponse> {
    const { data, error } = await supabase
      .from("products")
      .insert({
        name: dto.name,
        description: dto.description || null,
        price: dto.price,
        billing_cycle: dto.billingCycle,
        category: dto.category || null,
        features: dto.features || [],
      })
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapProduct(data);
  }

  async update(id: string, dto: UpdateProductDto): Promise<ProductResponse> {
    const updates: Record<string, unknown> = {};
    if (dto.name) updates.name = dto.name;
    if (dto.description !== undefined) updates.description = dto.description;
    if (dto.price !== undefined) updates.price = dto.price;
    if (dto.billingCycle) updates.billing_cycle = dto.billingCycle;
    if (dto.category !== undefined) updates.category = dto.category;
    if (dto.features) updates.features = dto.features;
    if (dto.active !== undefined) updates.active = dto.active;

    const { data, error } = await supabase
      .from("products")
      .update(updates)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapProduct(data);
  }

  async remove(id: string): Promise<void> {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) throw new HttpException(500, error.message);
  }

  private mapProduct(data: any): ProductResponse {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      billingCycle: data.billing_cycle,
      category: data.category,
      features: data.features || [],
      active: data.active,
      createdAt: data.created_at,
    };
  }
}
