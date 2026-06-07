export function toInt(value: unknown, fallback: number): number {
  if (typeof value === "string") {
    return parseInt(value, 10) || fallback;
  }
  return fallback;
}

export function toStr(value: unknown): string | undefined {
  if (typeof value === "string") {
    return value;
  }
  return undefined;
}

export function param(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0];
  return value ?? "";
}
