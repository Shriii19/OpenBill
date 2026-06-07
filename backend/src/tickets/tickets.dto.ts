export interface CreateTicketDto {
  subject: string;
  message: string;
  priority?: "low" | "normal" | "high";
  department?: string;
}

export interface TicketResponse {
  id: string;
  ticketNumber: string;
  subject: string;
  status: string;
  priority: string;
  department: string;
  createdAt: string;
  updatedAt: string;
}
