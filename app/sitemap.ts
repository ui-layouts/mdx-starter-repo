import type { MetadataRoute } from 'next';
import { getAllComponentsArray } from '@/configs/docs';

const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL ?? 'https://ui-layouts.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const allComponents = getAllComponentsArray();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...allComponents.map((component) => ({
      url: `${baseUrl}${component.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
