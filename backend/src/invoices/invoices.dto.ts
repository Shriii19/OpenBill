export interface CreateInvoiceDto {
  clientId: string;
  items: { description: string; amount: number; quantity: number }[];
  dueDate: string;
  notes?: string;
}

export interface InvoiceResponse {
  id: string;
  invoiceNumber: string;
  clientId: string;
  items: { description: string; amount: number; quantity: number }[];
  subtotal: number;
  tax: number;
  total: number;
  status: string;
  dueDate: string;
  notes: string | null;
  createdAt: string;
}
