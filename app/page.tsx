"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import Category from "@/components/Category";

const page = () => {
  const GenderOptions = ["Male", "Female", "Other"];
  const BrandOptions = ["Nike", "Adidas", "Puma"];
  const TypeOptions = ["Running", "Casual", "Formal", "Sports"];
  const ColorOptions = ["Black", "White", "Red", "Blue", "Green"];
  const SizeOptions = ["6", "7", "8", "9", "10", "11", "12"];

  const featuredProducts = [
    {
      id: 1,
      name: "Adidas Runfalcon",
      price: "$99.99",
      image: "/adidas-runfalcon.jpg",
    },
    {
      id: 2,
      name: "Nike Vomero",
      price: "$139.99",
      image: "/the-nike-vomero.avif",
    },
    {
      id: 3,
      name: "Marathon Elite",
      price: "$179.99",
      image: "/Green-Nike-shoe.jpeg",
    },
    {
      id: 4,
      name: "Adidas Ultraboost",
      price: "$79.99",
      image: "/Adidas-runing-shoe.avif",
    },
    {
      id: 5,
      name: "Adidas Ultraboost",
      price: "$80.00",
      image: "/adidas-woman-run.jpg",
    },
    {
      id: 6,
      name: "Puma RS-X",
      price: "$159.99",
      image: "/puma-woman.avif",
    },
    {
      id: 7,
      name: "Nike Air Zoom",
      price: "$129.99",
      image: "/running-Nike-shoe.avif",
    },
    {
      id: 8,
      name: "Nike Air",
      price: "$89.99",
      image: "/Nike-Air-shoe.jpeg",
    },
    {
      id: 9,
      name: "Puma Classic",
      price: "$69.99",
      image: "/puma-runing.jpg",
    },
    {
      id: 10,
      name: "Puma Gel-Kayano",
      price: "$149.99",
      image: "/puma-shoe.jpg",
    },
    {
      id: 11,
      name: "Puma Speed",
      price: "$179.99",
      image: "/puma-shoe.avif",
    },
    {
      id: 12,
      name: "Adidas Prophere",
      price: "$119.99",
      image: "/Adidas-shoe.jpg",
    },
    {
      id: 13,
      name: "Adidas Classic",
      price: "$139.99",
      image: "/adidas-woman.jpg",
    },
    {
      id: 14,
      name: "Nike Flex",
      price: "$109.99",
      image: "/Red-Nike-Shoe.jpeg",
    },
    {
      id: 15,
      name: "Adidas Pureboost-5",
      price: "$149.99",
      image: "/pureboost-5-Adidas.avif",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        className="flex items-center justify-center min-h-screen rounded-3xl bg-black overflow-hidden relative top-28 left-0 right-0"
      >
        <Image
          src="/landingImage.jpg"
          alt="Logo"
          width={1300}
          height={1300}
          className="mx-auto my-8 rounded-3xl"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white p-4 rounded-3xl">
          <motion.h1
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="text-5xl font-bold text-center"
          >
            Welcome to Shoe Store
          </motion.h1>
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="text-lg text-center mt-4"
          >
            Discover the latest trends in footwear and find your perfect pair.
          </motion.p>

          <div className="mt-10 space-x-4">
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
              className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:shadow-lg cursor-pointer transition"
            >
              Shop Now
            </motion.button>
            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
              className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:shadow-lg cursor-pointer transition"
            >
              View Collection
            </motion.button>
          </div>
        </div>
      </motion.div>
      <Category />
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-12 absolute inset-0 top-430 grid grid-cols-5 gap-6 rounded-3xl">
        <div className="flex flex-col space-y-4 col-span-1 bg-neutral-400 dark:bg-neutral-800 p-4 rounded-3xl text-neutral-900 dark:text-neutral-200 h-[900px] overflow-y-auto">
          <h2 className="text-2xl font-bold">Filters</h2>
          <h3 className="text-lg font-semibold">Gender</h3>
          <ul className="space-y-2">
            {GenderOptions.map((option) => (
              <li key={option} className="ml-4 cursor-pointer">
                {option}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold">Brand</h3>
          <ul className="space-y-2">
            {BrandOptions.map((option) => (
              <li key={option} className="ml-4 cursor-pointer">
                {option}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold">Type</h3>
          <ul className="space-y-2">
            {TypeOptions.map((option) => (
              <li key={option} className="ml-4 cursor-pointer">
                {option}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold">Color</h3>
          <ul className="space-y-2">
            {ColorOptions.map((option) => (
              <li key={option} className="ml-4 cursor-pointer">
                {option}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold">Size</h3>
          <div className="grid grid-cols-4 gap-2 justify-center items-center">
            {SizeOptions.map((option) => (
              <button
                key={option}
                className="cursor-pointer border border-white px-4 py-1 rounded-sm hover:bg-white hover:text-black transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                key={product.id}
                className="bg-white p-4 rounded-3xl shadow-md hover:shadow-lg transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl mb-4"
                />
                <div className="h-16 ">
                  <Heart className="active:scale-95text-neutral-900 active:text-pink-600 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {product.name}
                </h3>
                <p className="text-lg text-green-500 font-bold">
                  {product.price}
                </p>
                <button className="mt-4 w-full bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-700 hover:scale-98 active:mt-3 transition-all ">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
