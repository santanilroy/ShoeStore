"use client";
import React from "react";
import { motion } from "motion/react";

const Category = () => {
  const categories = [
    { name: "Male", bgImage: "/mens.avif" },
    { name: "Female", bgImage: "/womens.avif" },
    { name: "New Arrivals", bgImage: "/new.webp" },
  ];
  return (
    <>
      <div className="text-center my-8 absolute top-270 w-full">
        <h2 className="text-3xl font-bold">Category</h2>
        <div className="flex justify-center gap-10 mt-10">
          {categories.map((category) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
              key={category.name}
              className={`px-4 py-2 border rounded-lg w-[400px] h-[450px] text-5xl font-bold flex justify-center items-center cursor-pointer hover:bg-gray-200 ${
                category.bgImage ? "bg-cover bg-center" : ""
              }`}
              style={{
                backgroundImage: `url(${category.bgImage})`,
                opacity: 0.9,
              }}
            >
              {category.name}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
