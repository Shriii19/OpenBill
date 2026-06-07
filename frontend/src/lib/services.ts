import { api } from "./api";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  company: string | null;
  createdAt: string;
}

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  company: string | null;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  billingCycle: string;
  category: string | null;
  features: string[];
  active: boolean;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  items: { description: string; amount: number; quantity: number }[];
  subtotal: number;
  tax: number;
  total: number;
  status: string;
  dueDate: string;
  createdAt: string;
}

export interface Ticket {
  id: string;
  ticketNumber: string;
  subject: string;
  status: string;
  priority: string;
  department: string;
  createdAt: string;
  updatedAt: string;
}

export const usersApi = {
  me: () => api.get<{ success: boolean; data: User }>("/users/me"),
  list: (page = 1, limit = 20) =>
    api.get<{ success: boolean; users: User[]; total: number }>(
      `/users?page=${page}&limit=${limit}`
    ),
};

export const clientsApi = {
  list: (page = 1, limit = 20, search?: string) =>
    api.get<{ success: boolean; clients: Client[]; total: number }>(
      `/clients?page=${page}&limit=${limit}${search ? `&search=${search}` : ""}`
    ),
  get: (id: string) =>
    api.get<{ success: boolean; data: Client }>(`/clients/${id}`),
  create: (data: Partial<Client>) =>
    api.post<{ success: boolean; data: Client }>("/clients", data),
};

export const productsApi = {
  list: (page = 1, limit = 20, category?: string) =>
    api.get<{ success: boolean; products: Product[]; total: number }>(
      `/products?page=${page}&limit=${limit}${category ? `&category=${category}` : ""}`
    ),
  get: (id: string) =>
    api.get<{ success: boolean; data: Product }>(`/products/${id}`),
};

export const invoicesApi = {
  list: (page = 1, limit = 20, clientId?: string) =>
    api.get<{ success: boolean; invoices: Invoice[]; total: number }>(
      `/invoices?page=${page}&limit=${limit}${clientId ? `&clientId=${clientId}` : ""}`
    ),
  get: (id: string) =>
    api.get<{ success: boolean; data: Invoice }>(`/invoices/${id}`),
};

export const ticketsApi = {
  list: (page = 1, limit = 20) =>
    api.get<{ success: boolean; tickets: Ticket[]; total: number }>(
      `/tickets?page=${page}&limit=${limit}`
    ),
  create: (data: { subject: string; message: string; priority?: string; department?: string }) =>
    api.post<{ success: boolean; data: Ticket }>("/tickets", data),
  close: (id: string) =>
    api.post<{ success: boolean; data: Ticket }>(`/tickets/${id}/close`, {}),
};
