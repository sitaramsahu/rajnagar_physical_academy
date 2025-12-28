"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "fitness",
    title: "Fitness Training",
    thumb: "/Image-1.jpg",
    img: "/Image-1.jpg",
    product:
      "Build strength, endurance, and overall wellness with structured fitness training programs.",
  },
  {
    id: "sports",
    title: "Sports Coaching",
    thumb: "/Image-1.jpg",
    img: "/Image-1.jpg",
    product:
      "Learn foundational and advanced skills in major sports with professional coaching.",
  },
  {
    id: "yoga",
    title: "Yoga & Flexibility",
    thumb: "/Image-1.jpg",
    img: "/Image-1.jpg",
    product:
      "Improve posture, flexibility, and mental focus through guided yoga sessions.",
  },
  {
    id: "nutrition",
    title: "Nutrition & Diet",
    thumb: "/Image-1.jpg",
    img: "/Image-1.jpg",
    product:
      "Understand proper diet planning and nutrition routines for a healthier lifestyle.",
  },
  {
    id: "selfdefense",
    title: "Self-Defense",
    thumb: "/Image-1.jpg",
    img: "/Image-1.jpg",
    product:
      "Learn practical self-defense techniques and build confidence and awareness.",
  },
  {
    id: "firstaid",
    title: "First Aid Training",
    thumb: "/Image-1.jpg",
    img: "/Image-1.jpg",
    product:
      "Gain essential first-aid skills to handle injuries and emergencies safely.",
  },
];

export default function HeroTabs() {
  const [activeTab, setActiveTab] = useState("projects");

  const active = tabs.find((t) => t.id === activeTab);

  return (
    <section className="w-full bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to Our Physical Academy
          </h1>

          <p className="text-gray-600 text-lg">
            Learn, train, and grow with expert instructors. Build your career
            with high-quality physical education programs.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="/courses">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-purple-800 transition">
                Explore Courses →
              </button>
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-black dark:border-white rounded-full text-black dark:text-white font-medium "
            >
              Contact Us
            </a>
          </div>

          <p className="text-sm text-gray-500">
            No admission fee required ✦ Start learning online
          </p>

          {/* TABS */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-3">
              What would you like to learn today?
            </h3>

            <div className="flex flex-wrap gap-3">
              {/* {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 border px-4 py-2 rounded-lg
                    ${
                      activeTab === tab.id
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-300"
                    }
                  `}
                >
                  <Image
                    src={tab.thumb}
                    width={40}
                    height={40}
                    alt={tab.title}
                  />
                  {tab.title}
                </button>
              ))} */}
              {tabs[active] && (
                <Image
                  src={tabs[active].img}
                  alt={tabs[active].title}
                  width={500}
                  height={500}
                />
              )}
            </div>

            {/* Product Description */}
            <div className="mt-6 p-4 border rounded-xl bg-gray-50">
              <p className="text-gray-700">{active.product}</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <Image
            src={active.img}
            alt="Hero Image"
            width={700}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
