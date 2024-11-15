export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export function generateMetaTags({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  tags
}: SEOProps): Record<string, string> {
  const meta: Record<string, string> = {
    'title': title,
    'og:title': title,
    'twitter:title': title
  };

  if (description) {
    meta['description'] = description;
    meta['og:description'] = description;
    meta['twitter:description'] = description;
  }

  if (image) {
    meta['og:image'] = image;
    meta['twitter:image'] = image;
    meta['twitter:card'] = 'summary_large_image';
  }

  if (url) {
    meta['og:url'] = url;
    meta['canonical'] = url;
  }

  meta['og:type'] = type;

  if (type === 'article') {
    if (publishedTime) meta['article:published_time'] = publishedTime;
    if (modifiedTime) meta['article:modified_time'] = modifiedTime;
    if (author) meta['article:author'] = author;
    if (tags) meta['article:tag'] = tags.join(',');
  }

  return meta;
}