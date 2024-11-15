import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url } = context.request;
  const pathname = new URL(url).pathname;

  // If no language prefix, redirect to default language
  if (!pathname.match(/^\/[a-z]{2}\//)) {
    return context.redirect(`/en${pathname}`);
  }

  return next();
});