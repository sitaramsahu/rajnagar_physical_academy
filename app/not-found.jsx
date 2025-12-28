"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center bg-gradient-to-b from-amber-500 to-amber-700 text-white text-center px-4">
      {/* 404 Animation */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl md:text-9xl font-extrabold mb-4 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl md:text-3xl font-medium mb-2"
      >
        Oops! Page not found
      </motion.h2>

      <p className="text-base md:text-lg text-white/80 mb-8 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link
          href="/"
          className="px-6 py-3 bg-white text-amber-700 font-semibold rounded-full shadow-md hover:bg-amber-100 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
