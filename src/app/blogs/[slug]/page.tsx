"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import MobileContactBar from "../../../../components/MobileContactBar";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  datePublished: string;
}

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blog/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching blog:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!blog) {
    return <div className="text-center py-10">Blog not found</div>;
  }

  return (
    <div>
      <Navbar />

      <section className="w-11/12 md:w-5/6 mx-auto py-24 mt-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

        {/* Date - fixed using toUTCString() to avoid locale mismatch */}
        <p className="text-gray-500 text-sm mb-6">
          {new Date(blog.datePublished).toUTCString()}
        </p>

        {/* Cover Image - must have width & height */}
        {blog.coverImage && (
          <div className="w-full h-[400px] relative mb-6">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </section>

      <Footer />
      <MobileContactBar />
    </div>
  );
}
