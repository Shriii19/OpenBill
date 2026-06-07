import { supabase } from "../config/supabase";
import { HttpException } from "../common/filters/http-exception.filter";
import type { ProcessPaymentDto, PaymentResponse } from "./payments.dto";

export class PaymentsService {
  async findAll(page = 1, limit = 20) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, count, error } = await supabase
      .from("payments")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) throw new HttpException(500, error.message);

    return {
      payments: data.map(this.mapPayment),
      total: count || 0,
      page,
      limit,
    };
  }

  async process(dto: ProcessPaymentDto): Promise<PaymentResponse> {
    const { data, error } = await supabase
      .from("payments")
      .insert({
        invoice_id: dto.invoiceId,
        amount: dto.amount,
        currency: dto.currency || "USD",
        method: dto.method,
        status: "completed",
      })
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);

    await supabase
      .from("invoices")
      .update({ status: "paid", paid_at: new Date().toISOString() })
      .eq("id", dto.invoiceId);

    return this.mapPayment(data);
  }

  private mapPayment(data: any): PaymentResponse {
    return {
      id: data.id,
      invoiceId: data.invoice_id,
      amount: data.amount,
      currency: data.currency,
      method: data.method,
      status: data.status,
      createdAt: data.created_at,
    };
  }
}
