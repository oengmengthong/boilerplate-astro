import { z } from 'zod';

const envSchema = z.object({
  PUBLIC_API_URL: z.string().url(),
  PUBLIC_AUTH_DOMAIN: z.string(),
  PUBLIC_AUTH_CLIENT_ID: z.string(),
  PUBLIC_GA_TRACKING_ID: z.string().optional(),
  PUBLIC_ENABLE_NEWSLETTER: z.enum(['true', 'false']).transform(val => val === 'true'),
  PUBLIC_ENABLE_REVIEWS: z.enum(['true', 'false']).transform(val => val === 'true'),
  PUBLIC_CACHE_TTL: z.string().transform(val => parseInt(val, 10)),
});

type EnvConfig = z.infer<typeof envSchema>;

function validateEnv(): EnvConfig {
  try {
    return envSchema.parse({
      PUBLIC_API_URL: import.meta.env.PUBLIC_API_URL,
      PUBLIC_AUTH_DOMAIN: import.meta.env.PUBLIC_AUTH_DOMAIN,
      PUBLIC_AUTH_CLIENT_ID: import.meta.env.PUBLIC_AUTH_CLIENT_ID,
      PUBLIC_GA_TRACKING_ID: import.meta.env.PUBLIC_GA_TRACKING_ID,
      PUBLIC_ENABLE_NEWSLETTER: import.meta.env.PUBLIC_ENABLE_NEWSLETTER,
      PUBLIC_ENABLE_REVIEWS: import.meta.env.PUBLIC_ENABLE_REVIEWS,
      PUBLIC_CACHE_TTL: import.meta.env.PUBLIC_CACHE_TTL,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map(issue => issue.path.join('.')).join(', ');
      throw new Error(
        `❌ Invalid environment variables: ${missingVars}\n` +
        `Please check your .env file and make sure all required variables are set correctly.`
      );
    }
    throw error;
  }
}

export const env = validateEnv();