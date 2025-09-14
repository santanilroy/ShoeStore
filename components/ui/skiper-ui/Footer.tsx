import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-800 text-white py-4 relative top-860 w-full">
        <div className="container mx-auto text-center grid grid-cols-5 justify-between items-center px-4">
          <div className="mb-4 md:mb-0 flex flex-col items-center justify-center h-[400px] md:w-auto gap-6 md:gap-0 md:flex-row">
            <h2 className="text-3xl font-bold">ShoeStore</h2>
          </div>
          <div className="mb-4 md:mb-0 flex flex-col justify-center items-start h-[400px] md:w-auto gap-6 md:gap-0">
            <h2 className="text-2xl font-bold">Shop</h2>
            <ul className="space-y-2 mt-4 text-left">
              <li>
                <a href="#" className="text-sm">
                  Mens Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Womens Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Sale
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 flex flex-col justify-center items-start h-[400px] md:w-auto gap-6 md:gap-0">
            <h2 className="text-2xl font-bold">Support</h2>
            <ul className="space-y-2 mt-4 text-left">
              <li>
                <a href="#" className="text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 flex flex-col justify-center items-start h-[400px] md:w-auto gap-6 md:gap-0">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <ul className="space-y-2 mt-4 text-left">
              <li>
                <a href="#" className="text-sm">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 flex flex-col justify-center items-start h-[400px] md:w-auto gap-6 md:gap-0">
            <h2 className="text-2xl font-bold">Newsletter</h2>
            <p className="text-sm mt-2 text-left">
              Subscribe to our newsletter for the latest updates
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-r-md border border-gray-300 invalid:bg-red-300"
              />
              <button className="bg-blue-500 text-white p-2 rounded-r-md absolute top-61 right-21">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className="my-4 border-2 border-neutral-300 w-[90%] mx-auto" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Shoe Store. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
