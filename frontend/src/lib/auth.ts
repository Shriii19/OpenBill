import { api } from "./api";

export interface AuthResponse {
  success: boolean;
  data: {
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      role: string;
    };
    token: string;
  };
}

export const authApi = {
  login: (email: string, password: string) =>
    api.post<AuthResponse>("/auth/login", { email, password }),

  register: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    company?: string;
  }) => api.post<AuthResponse>("/auth/register", data),
};
