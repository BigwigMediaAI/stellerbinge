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
  excerpt: string;
  schemaMarkup?: string[];
}

async function getBlog(slug: string): Promise<Blog> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/blog/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blog");

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: `https://www.stellarbinge.com/blogs/${blog.slug}`,
    },
  };
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return (
    <div>
      {/* <!-- Open Graph Meta Tags --> */}
      <meta property="og:title" content={blog.title} />
      <meta property="og:description" content={blog.excerpt} />
      <meta property="og:image" content={blog.coverImage} />
      <meta
        property="og:url"
        content={`https://www.stellarbinge.com/blogs/${blog.slug}`}
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:site_name"
        content="Stellar Binge Restaurant & Lounge Bar"
      />
      <meta property="og:locale" content="en_IN" />

      <Navbar />

      {Array.isArray(blog.schemaMarkup) &&
        blog.schemaMarkup.map((markup, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: markup }}
          />
        ))}

      <section className="w-11/12 md:w-5/6 mx-auto py-24 mt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-500 text-sm mb-6">
          {new Date(blog.datePublished).toUTCString()}
        </p>

        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="rounded-lg w-full h-[600px] object-cover mb-6"
          />
        )}

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </section>

      <Footer />
      <MobileContactBar />
    </div>
  );
}
