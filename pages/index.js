import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles1 from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center">
      <Head>
        <title>Hunting coder</title>
        <link rel="icon" href="/icons8-blog-24.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full px-4">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-10 text-center">
          <Image
            src="/blogCover.jpg"
            width={120}
            height={120}
            alt="Blog Cover"
            className="mx-auto rounded-full mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Welcome to Hunting Coder
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover coding tips, tutorials, and resources to boost your web
            development journey. Explore our blog for the latest articles and
            guides!
          </p>
          <Link href="/blog">
            <span className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold text-lg shadow hover:bg-purple-700 transition">
              Read Blogs
            </span>
          </Link>
        </div>
        <section className="mt-12 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <Image src="/window.svg" width={48} height={48} alt="Modern" />
              <h3 className="font-bold text-lg mt-2 mb-1">Modern Tech</h3>
              <p className="text-gray-600 text-sm">
                Built with Next.js and Tailwind CSS for fast, responsive
                experiences.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <Image src="/globe.svg" width={48} height={48} alt="Community" />
              <h3 className="font-bold text-lg mt-2 mb-1">Active Community</h3>
              <p className="text-gray-600 text-sm">
                Join a growing network of coders sharing knowledge and support.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <Image src="/file.svg" width={48} height={48} alt="Resources" />
              <h3 className="font-bold text-lg mt-2 mb-1">Quality Resources</h3>
              <p className="text-gray-600 text-sm">
                Access curated articles, guides, and tutorials for all levels.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full text-center py-6 mt-16 text-gray-500 text-sm">
        &copy; 2025 Hunting Coder. All rights reserved.
      </footer>
    </div>
  );
}
