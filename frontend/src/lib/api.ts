const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

interface ApiOptions extends RequestInit {
  token?: string;
}

async function request<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(fetchOptions.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  let data: unknown = null;
  const text = await res.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      // non-JSON response body; fall through to status-based error
    }
  }

  if (!res.ok) {
    const message =
      data && typeof data === "object" && "message" in data
        ? String((data as { message: unknown }).message)
        : `Request failed (${res.status})`;
    throw new Error(message);
  }

  return data as T;
}

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("openbill_token");
}

export const api = {
  get: <T>(endpoint: string, token?: string) =>
    request<T>(endpoint, { method: "GET", token: token || getToken() || undefined }),

  post: <T>(endpoint: string, body: unknown, token?: string) =>
    request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      token: token || getToken() || undefined,
    }),

  put: <T>(endpoint: string, body: unknown, token?: string) =>
    request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      token: token || getToken() || undefined,
    }),

  delete: <T>(endpoint: string, token?: string) =>
    request<T>(endpoint, { method: "DELETE", token: token || getToken() || undefined }),
};
