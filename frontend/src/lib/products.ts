export interface CatalogProduct {
  name: string;
  tagline: string;
  price: number;
  cycle: "monthly" | "yearly";
  category: string;
  popular?: boolean;
  features: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  { name: "Web Hosting", slug: "web-hosting", description: "Shared hosting plans for every need" },
  { name: "VPS Servers", slug: "vps-servers", description: "Virtual private servers with full root access" },
  { name: "Dedicated Servers", slug: "dedicated-servers", description: "Bare-metal servers for high performance" },
  { name: "Domains", slug: "domains", description: "Register or transfer your domains" },
  { name: "SSL Certificates", slug: "ssl", description: "Secure your websites with SSL" },
];

export const products: CatalogProduct[] = [
  {
    name: "Starter Hosting",
    tagline: "Perfect for personal websites",
    price: 9.99,
    cycle: "monthly",
    category: "web-hosting",
    features: ["1 website", "10 GB SSD", "100 GB bandwidth", "1 email", "Free SSL"],
  },
  {
    name: "Business Hosting",
    tagline: "Ideal for growing businesses",
    price: 24.99,
    cycle: "monthly",
    category: "web-hosting",
    popular: true,
    features: ["10 websites", "50 GB SSD", "Unlimited bandwidth", "50 emails", "Free SSL + CDN"],
  },
  {
    name: "Enterprise Hosting",
    tagline: "For high-traffic sites",
    price: 59.99,
    cycle: "monthly",
    category: "web-hosting",
    features: ["Unlimited websites", "200 GB NVMe", "Unlimited bandwidth", "Unlimited emails", "Dedicated IP"],
  },
  {
    name: "Shared Hosting Lite",
    tagline: "Budget-friendly starter",
    price: 4.99,
    cycle: "monthly",
    category: "web-hosting",
    features: ["1 website", "5 GB SSD", "50 GB bandwidth"],
  },
  {
    name: "Ryzen 7 VPS",
    tagline: "AMD Ryzen 7 4 vCPU",
    price: 19.99,
    cycle: "monthly",
    category: "vps-servers",
    features: ["4 vCPU", "8 GB RAM", "100 GB NVMe", "4 TB transfer", "1 IP"],
  },
  {
    name: "Intel Gold VPS",
    tagline: "Intel Xeon Gold 6 vCPU",
    price: 29.99,
    cycle: "monthly",
    category: "vps-servers",
    popular: true,
    features: ["6 vCPU", "16 GB RAM", "200 GB NVMe", "8 TB transfer", "2 IPs"],
  },
  {
    name: "EPYC VPS",
    tagline: "AMD EPYC 8 vCPU",
    price: 49.99,
    cycle: "monthly",
    category: "vps-servers",
    features: ["8 vCPU", "32 GB RAM", "400 GB NVMe", "Unmetered", "2 IPs"],
  },
  {
    name: "Dedicated Server E",
    tagline: "Intel Xeon E-2388G",
    price: 99.99,
    cycle: "monthly",
    category: "dedicated-servers",
    features: ["8 cores / 16 threads", "64 GB ECC RAM", "2x1 TB NVMe RAID", "Unmetered", "/29 IP block"],
  },
  {
    name: "Dedicated Server AMD",
    tagline: "AMD EPYC 7313P",
    price: 179.99,
    cycle: "monthly",
    category: "dedicated-servers",
    features: ["16 cores / 32 threads", "128 GB ECC RAM", "2x2 TB NVMe RAID", "Unmetered", "/29 IP block"],
  },
  {
    name: ".com Domain",
    tagline: "The classic — register or transfer",
    price: 11.99,
    cycle: "yearly",
    category: "domains",
    features: ["Free WHOIS privacy", "DNS management", "Email forwarding", "Auto-renewal"],
  },
  {
    name: ".io Domain",
    tagline: "Popular with startups and tech",
    price: 34.99,
    cycle: "yearly",
    category: "domains",
    features: ["Free WHOIS privacy", "DNS management", "Email forwarding", "Auto-renewal"],
  },
  {
    name: ".dev Domain",
    tagline: "Built for developers, HTTPS required",
    price: 14.99,
    cycle: "yearly",
    category: "domains",
    features: ["Free WHOIS privacy", "DNS management", "HSTS preloaded", "Auto-renewal"],
  },
  {
    name: "Standard SSL",
    tagline: "Domain validation for one site",
    price: 49.99,
    cycle: "yearly",
    category: "ssl",
    features: ["1 domain", "DV validation", "256-bit encryption", "Issued in minutes"],
  },
  {
    name: "Wildcard SSL",
    tagline: "Cover unlimited subdomains",
    price: 129.99,
    cycle: "yearly",
    category: "ssl",
    popular: true,
    features: ["Unlimited subdomains", "DV validation", "256-bit encryption", "$10k warranty"],
  },
  {
    name: "EV SSL",
    tagline: "Extended validation for business",
    price: 199.99,
    cycle: "yearly",
    category: "ssl",
    features: ["1 domain", "EV validation", "256-bit encryption", "$1M warranty"],
  },
];

export function productsByCategory(slug: string): CatalogProduct[] {
  return products.filter((p) => p.category === slug);
}

export function popularProducts(): CatalogProduct[] {
  return products.filter((p) => p.popular);
}
