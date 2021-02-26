import React from "react";

export default function Nav({ categories }) {
  return (
    <nav
      className="flex justify-evenly h-10 z-50 bg-black text-xs font-sans tracking-widest"
      aria-label="Global"
    >
      <div className="hidden md:flex z-50 items-center">
        <div className="flex">
          <a href="#">
            <a href="/" className="font-medium text-white">
              RECLINERY39
            </a>
          </a>
        </div>
      </div>
      <div className="flex space-x-1 sm:space-x-20 justify-items-stretch">
        <a
          href="#"
          className="font-medium text-white hover:text-red-400 border-t-2 border-red-400"
        >
          DISCOVER
        </a>

        <a
          href="#"
          className="font-medium text-white hover:text-pink-400 border-t-2 border-pink-400"
        >
          WATCH
        </a>

        <a
          href="#"
          className="font-medium text-white hover:text-yellow-400 border-t-2 border-yellow-400"
        >
          SHOP
        </a>

        <a
          href="#"
          className="font-medium text-white hover:text-blue-400 border-t-2 border-blue-400"
        >
          +MORE
        </a>
      </div>
    </nav>
  );
}
