import { supabase } from "../config/supabase";
import { HttpException } from "../common/filters/http-exception.filter";
import type { CreateTicketDto, TicketResponse } from "./tickets.dto";

export class TicketsService {
  async findAll(page = 1, limit = 20, userId?: string) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from("tickets")
      .select("*", { count: "exact" })
      .order("updated_at", { ascending: false });

    if (userId) {
      query = query.eq("user_id", userId);
    }

    const { data, count, error } = await query.range(from, to);

    if (error) throw new HttpException(500, error.message);

    return {
      tickets: data.map(this.mapTicket),
      total: count || 0,
      page,
      limit,
    };
  }

  async findById(id: string): Promise<TicketResponse> {
    const { data, error } = await supabase
      .from("tickets")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) throw new HttpException(404, "Ticket not found");
    return this.mapTicket(data);
  }

  async create(dto: CreateTicketDto, userId: string): Promise<TicketResponse> {
    const { data: ticketData } = await supabase
      .from("ticket_numbers")
      .select("next_number")
      .single();

    const nextNumber = (ticketData?.next_number || 1000) + 1;

    await supabase
      .from("ticket_numbers")
      .update({ next_number: nextNumber })
      .eq("id", 1);

    const { data, error } = await supabase
      .from("tickets")
      .insert({
        ticket_number: `TKT-${nextNumber}`,
        user_id: userId,
        subject: dto.subject,
        message: dto.message,
        priority: dto.priority || "normal",
        department: dto.department || "general",
        status: "open",
      })
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapTicket(data);
  }

  async close(id: string): Promise<TicketResponse> {
    const { data, error } = await supabase
      .from("tickets")
      .update({ status: "closed" })
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapTicket(data);
  }

  private mapTicket(data: any): TicketResponse {
    return {
      id: data.id,
      ticketNumber: data.ticket_number,
      subject: data.subject,
      status: data.status,
      priority: data.priority,
      department: data.department,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  }
}
