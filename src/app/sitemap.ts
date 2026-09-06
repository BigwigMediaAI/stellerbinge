import type { MetadataRoute } from "next";

const SITE_URL = "https://www.stellarbinge.com";
const API_URL =
  process.env.NEXT_PUBLIC_API_BASE || "https://binge-backend-rry6.onrender.com";

interface Blog {
  slug: string;
  lastUpdated?: string;
  datePublished?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs: Blog[] = [];

  try {
    const response = await fetch(`${API_URL}/blog/viewblog`, {
      cache: "no-store",
    });

    if (response.ok) {
      blogs = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch blogs for sitemap:", error);
  }

  const blogUrls: MetadataRoute.Sitemap = blogs
    .filter((blog) => blog.slug)
    .map((blog) => ({
      url: `${SITE_URL}/blog/${blog.slug}`,
      lastModified: blog.lastUpdated
        ? new Date(blog.lastUpdated)
        : blog.datePublished
          ? new Date(blog.datePublished)
          : new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    ...blogUrls,
  ];
}
