import { z } from "zod";

function normalizeEnvironmentValue(value: string | undefined, name: string) {
  if (!value) return undefined;

  let normalized = value.trim();
  const assignmentPrefix = `${name}=`;

  // Accept values copied from a .env snippet as well as values wrapped in quotes.
  if (normalized.startsWith(assignmentPrefix)) {
    normalized = normalized.slice(assignmentPrefix.length).trim();
  }

  const firstCharacter = normalized.at(0);
  const lastCharacter = normalized.at(-1);

  if (
    normalized.length >= 2 &&
    (firstCharacter === '"' || firstCharacter === "'") &&
    firstCharacter === lastCharacter
  ) {
    normalized = normalized.slice(1, -1).trim();
  }

  return normalized || undefined;
}

function readOptionalUrl(value: string | undefined, name: string) {
  const normalized = normalizeEnvironmentValue(value, name);
  if (!normalized) return undefined;

  const result = z.url().safeParse(normalized);

  if (!result.success) {
    console.warn(`[environment] Ignoring invalid ${name}; expected an absolute URL.`);
    return undefined;
  }

  return result.data;
}

export const env = {
  NEXT_PUBLIC_SUPABASE_URL: readOptionalUrl(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    "NEXT_PUBLIC_SUPABASE_URL",
  ),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: normalizeEnvironmentValue(
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  ) ?? normalizeEnvironmentValue(
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  ),
  NEXT_PUBLIC_SITE_URL: readOptionalUrl(
    process.env.NEXT_PUBLIC_SITE_URL,
    "NEXT_PUBLIC_SITE_URL",
  ),
};

export const isSupabaseConfigured = Boolean(env.NEXT_PUBLIC_SUPABASE_URL && env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
