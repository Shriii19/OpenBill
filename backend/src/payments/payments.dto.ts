export interface ProcessPaymentDto {
  invoiceId: string;
  amount: number;
  method: "credit_card" | "paypal" | "bank_transfer" | "crypto";
  currency?: string;
}

export interface PaymentResponse {
  id: string;
  invoiceId: string;
  amount: number;
  currency: string;
  method: string;
  status: string;
  createdAt: string;
}
