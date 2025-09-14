import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center py-10 px-2">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <Image
            src="/blogCover.jpg"
            width={320}
            height={200}
            alt="Blog Cover"
            className="rounded-lg shadow-md object-cover"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-purple-700 mb-2">
              Popular Blogs
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our latest articles and tutorials on web development,
              coding tips, and more!
            </p>
          </div>
        </div>
        <hr className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs &&
            blogs.map((blogitem) => (
              <div
                key={blogitem.slug || blogitem.title}
                className="bg-gray-50 rounded-lg shadow p-6 flex flex-col justify-between hover:shadow-xl transition"
              >
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3 className="font-bold text-xl text-blue-700 hover:underline cursor-pointer mb-2">
                    {blogitem.title}
                  </h3>
                </Link>
                <p className="text-gray-700 mb-3">
                  {blogitem.content.substr(0, 80)}
                  {blogitem.content.length > 80 ? "..." : ""}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {blogitem.author}</span>
                  <span>{blogitem.publishedDate}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default blog;
