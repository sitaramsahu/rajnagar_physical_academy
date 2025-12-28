"use client";
import HeroTabs from "@/components/Home/HeroTabs";
import Image from "next/image";

export default function Home() {
  const fallbackImage = "/jobs0.png";

  const scrollImages = [
    {
      img: "/jobs0.png",
      link: "/enrollment",
      text: "Enroll Now",
    },
    {
      img: "/jobs0.png",
      link: "/registration",
      text: "Register Now",
    },
    {
      img: "/jobs0.png",
      link: "/",
      text: "Rajnagar Physical Academy",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black font-sans">
      {/* Hero Section 
      <HeroTabs />*/}

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
      {/* full width Image Slider */}
      <div className="w-full bg-black/5 dark:bg-white py-0 mt-0 flex justify-center">
        <img
          src="/Image-1.jpg"
          alt="Slider-1"
          className="w-full max-w-7xl h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* Our Students Get the Job like-Home Guard, Police, Army, Navy, Air Force, and more */}
      <section className="w-full bg-white dark:bg-zinc-900 py-10 mt-10 flex flex-col items-center">
        <h3 className="text-sm lg:text-3xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
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
