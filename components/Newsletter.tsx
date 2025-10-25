"use client";
import React from "react";
import CustomBtn from "./ui/button";
export default function Newsletter() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-2xl  text-gray-800 mb-4">Newsletter</h2>

        {/* Sub-text */}
        <p className="text-gray-600 mb-6">
          Invite customers to join your mailing list
        </p>

        {/* Form */}
        <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Email address"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <CustomBtn text="Sign up" />
        </form>
      </div>
    </section>
  );
}
