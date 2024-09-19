"use client";

import { revalidatePath } from "next/cache";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b-2 px-4">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between h-20">
        <a href="/" className="text-lg md:text-2xl text-black font-light">
          Alexandru Răchită
        </a>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row md:flex space-x-0 md:space-x-4 space-y-2 md:space-y-0 items-center`}
        >
          <a href="/about" className="text-black link">
            About
          </a>
          <a href="/posts" className="text-black link">
            Blog Posts
          </a>
          <a href="/sign-in" className="text-black link">
            Sign In
          </a>
          <a href="#" className="text-black link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
