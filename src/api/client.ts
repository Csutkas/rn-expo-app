import { ApiError } from "./types/api-types";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;
const API_TIMEOUT = Number(process.env.EXPO_PUBLIC_API_TIMEOUT ?? "10000");

async function fetchWithTimeout(
  url: string,
  options?: RequestInit,
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
        ...options?.headers,
      },
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const response = await fetchWithTimeout(url, options);

  if (!response.ok) {
    throw new ApiError(
      response.status,
      `API error: ${response.status} ${response.statusText}`,
    );
  }

  const data: T = await response.json();
  return data;
}

export function buildQueryString(
  params: Record<string, string | number | boolean | undefined>,
): string {
  const filtered = Object.entries(params).filter(
    ([, v]) => v !== undefined && v !== null,
  );
  if (filtered.length === 0) return "";
  const qs = new URLSearchParams(
    filtered.map(([k, v]) => [k, String(v)]),
  ).toString();
  return `?${qs}`;
}
