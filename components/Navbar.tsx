"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { ThemeToggleButton2 } from "@/components/ui/skiper-ui/skiper4";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const navitems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Categories", href: "/categories" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        className="flex items-center justify-between p-4 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-3xl  text-neutral-800 dark:text-neutral-200 max-w-full mx-auto h-[90px] fixed top-0 left-0 right-0 z-50"
      >
        <h1 className="text-3xl font-bold tracking-tighter">ShoeStore</h1>
        <div className="space-x-10 bg-neutral-400/20 rounded-2xl px-10 py-5">
          {navitems.map((item) => (
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              key={item.name}
              whileHover={{ scale: 1.1 }}
            >
              <Link href={item.href} className="text-[15px]">
                {item.name}
              </Link>
            </motion.span>
          ))}
        </div>
        <div className="flex flex-row space-x-10 bg-neutral-400/20 rounded-2xl px-10 py-5">
          <Link href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart dark:text-white active:text-blue-500"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
            </svg>
          </Link>
          <Link href="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-heart dark:text-white active:text-pink-500"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
            </svg>
          </Link>
        </div>
        <motion.div
          layout
          className="flex items-center bg-neutral-400/20 rounded-2xl px-4 py-5"
        >
          <ThemeToggleButton2 className="h-5 w-5" />
          <span className="ml-2 text-xs">
            {isDark ? "Dark Mode" : "Light Mode"}
          </span>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
