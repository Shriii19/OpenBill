import { supabase } from "../config/supabase";
import { HttpException } from "../common/filters/http-exception.filter";
import type { CreateInvoiceDto, InvoiceResponse } from "./invoices.dto";

export class InvoicesService {
  async findAll(page = 1, limit = 20, clientId?: string) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from("invoices")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false });

    if (clientId) {
      query = query.eq("client_id", clientId);
    }

    const { data, count, error } = await query.range(from, to);

    if (error) throw new HttpException(500, error.message);

    return {
      invoices: data.map(this.mapInvoice),
      total: count || 0,
      page,
      limit,
    };
  }

  async findById(id: string): Promise<InvoiceResponse> {
    const { data, error } = await supabase
      .from("invoices")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) throw new HttpException(404, "Invoice not found");
    return this.mapInvoice(data);
  }

  async create(dto: CreateInvoiceDto): Promise<InvoiceResponse> {
    const subtotal = dto.items.reduce(
      (sum, item) => sum + item.amount * item.quantity,
      0
    );
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    const { data: invoiceData } = await supabase
      .from("invoice_numbers")
      .select("next_number")
      .single();

    const nextNumber = (invoiceData?.next_number || 1000) + 1;

    await supabase
      .from("invoice_numbers")
      .update({ next_number: nextNumber })
      .eq("id", 1);

    const { data, error } = await supabase
      .from("invoices")
      .insert({
        invoice_number: `INV-${nextNumber}`,
        client_id: dto.clientId,
        items: dto.items,
        subtotal,
        tax,
        total,
        status: "pending",
        due_date: dto.dueDate,
        notes: dto.notes || null,
      })
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapInvoice(data);
  }

  async markPaid(id: string): Promise<InvoiceResponse> {
    const { data, error } = await supabase
      .from("invoices")
      .update({ status: "paid", paid_at: new Date().toISOString() })
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapInvoice(data);
  }

  async cancel(id: string): Promise<InvoiceResponse> {
    const { data, error } = await supabase
      .from("invoices")
      .update({ status: "cancelled" })
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapInvoice(data);
  }

  private mapInvoice(data: any): InvoiceResponse {
    return {
      id: data.id,
      invoiceNumber: data.invoice_number,
      clientId: data.client_id,
      items: data.items,
      subtotal: data.subtotal,
      tax: data.tax,
      total: data.total,
      status: data.status,
      dueDate: data.due_date,
      notes: data.notes,
      createdAt: data.created_at,
    };
  }
}
