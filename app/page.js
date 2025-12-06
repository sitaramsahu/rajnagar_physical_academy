"use client";
import Image from "next/image";

export default function Home() {
  const fallbackImage = "/jobs0.png";

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black font-sans">
      {/* Hero Section */}
      <main className="relative z-10 flex flex-1 w-full max-w-5xl mx-auto flex-col items-center justify-center py-20 px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
              Welcome to Our Physical Academy
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-lg">
              Learn, train, and grow with expert instructors. Build your career
              with high-quality physical education programs.
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

      {/* full width video */}
      <div className="w-full bg-black/5 dark:bg-white py-0 mt-0 flex justify-center">
        <video
          src="/rpa-home-video-1.mp4"
          controls
          className="w-full max-w-7xl h-auto rounded-lg shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Our Students Get the Job like-Home Guard, Police, Army, Navy, Air Force, and more */}
      <section className="w-full bg-white dark:bg-zinc-900 py-10 mt-10 flex flex-col items-center">
        <h3 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Our Students Get the Job like- Home Guard, Police, Army, Navy, Air
          Force, and more
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {[
            "/jobs0.png",
            "/jobs0.png",
            "/jobs0.png",
            "/jobs0.png",
            "/jobs0.png",
            "/jobs0.png",
            "/jobs0.png",
            "/jobs0.png",
          ].map((src, index) => (
            <div
              key={index}
              className="w-48 h-48 relative rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={src || fallbackImage}
                alt={`Job ${index + 1}`}
                layout="fill"
                objectFit="cover"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage; // Fallback if broken
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
