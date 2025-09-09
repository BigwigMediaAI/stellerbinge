"use client";

import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Fuse from "fuse.js";
import Image from "next/image";
import MobileContactBar from "../../../components/MobileContactBar";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  coverImage: string;
  datePublished: string;
}

function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;

  // ✅ Fetch blogs on mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`
        );
        const data = await res.json();
        setBlogs(data);
        console.log(data);
        setFilteredBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  // ✅ Fuse.js for searching
  useEffect(() => {
    if (!searchQuery) {
      setFilteredBlogs(blogs);
      return;
    }

    const fuse = new Fuse(blogs, {
      keys: ["title", "excerpt", "author", "tags"],
      threshold: 0.3,
    });

    const results = fuse.search(searchQuery).map((result) => result.item);
    setFilteredBlogs(results);
    setCurrentPage(1);
  }, [searchQuery, blogs]);

  // ✅ Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Blogs container */}
      <main className="flex-1 w-11/12 md:w-5/6 mx-auto py-36 ">
        {/* Search */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col"
              >
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={1200}
                  height={600}
                  className="object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {blog.excerpt}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  By {blog.author} •{" "}
                  {new Date(blog.datePublished).toUTCString()}
                </p>

                <a
                  href={`/blogs/${blog.slug}`}
                  className="mt-auto text-[var(--primary-color)] hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No blogs found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
      <MobileContactBar />
    </div>
  );
}

export default Blogs;
