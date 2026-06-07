import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(__dirname, "../../.env") });

const requiredVars = [
  "SUPABASE_URL",
  "SUPABASE_SERVICE_KEY",
  "SUPABASE_ANON_KEY",
  "JWT_SECRET",
] as const;

const missing: string[] = [];

for (const key of requiredVars) {
  if (!process.env[key]) {
    missing.push(key);
  }
}

if (missing.length > 0) {
  console.error(
    `\n  Missing required environment variables:\n    ${missing
      .map((k) => `  • ${k}`)
      .join("\n    ")}\n`
  );
  console.error(
    `  Run the setup script to get started:\n    npm run setup\n`
  );
  process.exit(1);
}

export const env = {
  port: parseInt(process.env.PORT || "4000", 10),
  supabaseUrl: process.env.SUPABASE_URL!,
  supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY!,
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY!,
  jwtSecret: process.env.JWT_SECRET!,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
};
