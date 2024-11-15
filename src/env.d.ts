/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_AUTH_DOMAIN: string;
  readonly PUBLIC_AUTH_CLIENT_ID: string;
  readonly PUBLIC_GA_TRACKING_ID?: string;
  readonly PUBLIC_ENABLE_NEWSLETTER: string;
  readonly PUBLIC_ENABLE_REVIEWS: string;
  readonly PUBLIC_CACHE_TTL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}