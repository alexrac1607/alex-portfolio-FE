"use client";

import InputWithLabel from "@/components/LabeledInput";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // This is where you would handle the sign-in logic
    alert("Sign-in logic goes here!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Sign In
        </h2>
        <InputWithLabel
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <InputWithLabel
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <div className="mt-6">
          <button
            type="button"
            onClick={handleSignIn}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
