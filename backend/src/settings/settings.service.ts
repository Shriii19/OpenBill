import { supabase } from "../config/supabase";
import { HttpException } from "../common/filters/http-exception.filter";
import type { UpdateSettingsDto, SettingsResponse } from "./settings.dto";

export class SettingsService {
  async get(): Promise<SettingsResponse> {
    const { data, error } = await supabase
      .from("settings")
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);

    return this.mapSettings(data);
  }

  async update(dto: UpdateSettingsDto): Promise<SettingsResponse> {
    const updates: Record<string, unknown> = {};
    if (dto.companyName) updates.company_name = dto.companyName;
    if (dto.logo !== undefined) updates.logo = dto.logo;
    if (dto.currency) updates.currency = dto.currency;
    if (dto.taxRate !== undefined) updates.tax_rate = dto.taxRate;
    if (dto.emailSettings) updates.email_settings = dto.emailSettings;
    if (dto.invoiceSettings) updates.invoice_settings = dto.invoiceSettings;

    const { data, error } = await supabase
      .from("settings")
      .update(updates)
      .eq("id", 1)
      .select("*")
      .single();

    if (error) throw new HttpException(500, error.message);
    return this.mapSettings(data);
  }

  private mapSettings(data: any): SettingsResponse {
    return {
      companyName: data.company_name,
      logo: data.logo,
      currency: data.currency,
      taxRate: data.tax_rate,
      emailSettings: data.email_settings || {},
      invoiceSettings: data.invoice_settings || {},
    };
  }
}
