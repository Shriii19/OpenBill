export interface UpdateSettingsDto {
  companyName?: string;
  logo?: string;
  currency?: string;
  taxRate?: number;
  emailSettings?: Record<string, unknown>;
  invoiceSettings?: Record<string, unknown>;
}

export interface SettingsResponse {
  companyName: string;
  logo: string | null;
  currency: string;
  taxRate: number;
  emailSettings: Record<string, unknown>;
  invoiceSettings: Record<string, unknown>;
}
