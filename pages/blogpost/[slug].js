import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/getblogs?slug=" + slug)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlog(parsed?.name);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-start justify-center py-10 px-2">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-2 text-left">
          {blog ? blog.title : "Loading..."}
        </h1>
        <div className="flex items-center gap-4 mb-4">
          <span className="inline-block bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold">
            {blog?.author ? blog?.author : "Loading..."}
          </span>
          <span className="text-gray-500 text-sm">
            {blog?.publishedDate ? blog.publishedDate : ""}
          </span>
        </div>
        <hr className="mb-8" />
        <article className="prose prose-lg max-w-none text-gray-800 mb-8">
          {blog && blog?.content}
        </article>
        <p className="text-gray-400 text-xs mt-12">
          &copy; 2025 Hunting Coder Blog. All content is for demo purposes.
        </p>
      </div>
    </div>
  );
};

export default slug;
