"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
}

export default function BlogPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`
        );
        const data = await res.json();
        setBlogs(data.slice(0, 3)); // ✅ only first 3 blogs
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="w-11/12 md:w-5/6 mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-[var(--primary-color)]">
        Fresh Reads for Food Lovers
      </h2>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col"
          >
            <Image
              src={blog.coverImage}
              alt={blog.title}
              width={1200}
              height={600}
              className="object-cover rounded-lg h-48 w-full"
            />
            <h3 className="text-lg font-semibold mt-4 mb-2 line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {blog.excerpt}
            </p>
            <p className="text-xs text-gray-400 mb-4">
              By {blog.author} • {new Date(blog.datePublished).toDateString()}
            </p>

            <Link
              href={`/blogs/${blog.slug}`}
              className="mt-auto text-[var(--primary-color)] hover:underline font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      {/* Read More Blogs Button */}
      <div className="flex justify-center mt-10">
        <Link href="/blogs">
          <button className="px-6 py-3 text-sm md:text-base uppercase font-medium border border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white">
            View All Blogs
          </button>
        </Link>
      </div>
    </section>
  );
}
