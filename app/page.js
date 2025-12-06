import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black font-sans">
      {/* Header */}
      <header className="w-full bg-white dark:bg-zinc-900 shadow-sm py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Rajnagar Physical Academy
        </h1>
        <nav className="hidden md:flex gap-6 text-zinc-700 dark:text-zinc-300 font-medium">
          <a href="/courses" className="hover:text-black dark:hover:text-white">
            Courses
          </a>
          <a href="/about" className="hover:text-black dark:hover:text-white">
            About
          </a>
          <a href="/contact" className="hover:text-black dark:hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 w-full max-w-5xl mx-auto flex-col items-center justify-center py-20 px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
              Welcome to Our Physical Academy
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-lg">
              Learn, train, and grow with expert instructors. Build your career
              with high‑quality physical education programs.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="/courses"
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:opacity-80"
              >
                Explore Courses
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-black dark:border-white rounded-full text-black dark:text-white font-medium hover:bg-black/[0.05] dark:hover:bg-white/[0.1]"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/Image-1.jpg"
              alt="Academy Illustration"
              width={350}
              height={350}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white dark:bg-zinc-900 py-6 mt-10 text-center text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-700">
        <p>
          © {new Date().getFullYear()} Physical Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
