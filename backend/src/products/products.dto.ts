export interface CreateProductDto {
  name: string;
  description?: string;
  price: number;
  billingCycle: "monthly" | "quarterly" | "semiannual" | "annual";
  category?: string;
  features?: string[];
}

export interface UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  billingCycle?: "monthly" | "quarterly" | "semiannual" | "annual";
  category?: string;
  features?: string[];
  active?: boolean;
}

export interface ProductResponse {
  id: string;
  name: string;
  description: string | null;
  price: number;
  billingCycle: string;
  category: string | null;
  features: string[];
  active: boolean;
  createdAt: string;
}
