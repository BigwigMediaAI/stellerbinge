import { Metadata } from "next";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import MobileContactBar from "../../../../components/MobileContactBar";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  datePublished: string;
  description: string;
}

async function getBlog(slug: string): Promise<Blog> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blog/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blog");

  return res.json();
}

// ✅ Correctly typed generateMetadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // 👈 mark params as Promise
}): Promise<Metadata> {
  const { slug } = await params; // 👈 await params before using
  const blog = await getBlog(slug);

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `https://www.stellarbinge.com/blogs/${blog.slug}`,
    },
  };
}

// ✅ Correctly typed page
export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>; // 👈 mark params as Promise
}) {
  const { slug } = await params; // 👈 await params
  const blog = await getBlog(slug);

  return (
    <div>
      <Navbar />

      <section className="w-11/12 md:w-5/6 mx-auto py-24 mt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-500 text-sm mb-6">
          {new Date(blog.datePublished).toUTCString()}
        </p>

        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="rounded-lg w-full h-[400px] object-cover mb-6"
          />
        )}

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
