"use client";

import InputWithLabel from "@/components/LabeledInput";
import { login } from "@/dataclient/login";
import { useState } from "react";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const data = await login(username, password);
      console.log("Logged in successfully:", data);

      // Optionally, redirect the user after successful login
      // window.location.href = '/dashboard';
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login failed:", error.message);
        // Show an error message to the user
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  }
  return (
    <div className="flex flex-col min-h-screen justify-center bg-gray-50">
      <div className="h-48"></div> {/* S   pacer div to push content down */}
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Sign In
        </h2>
        <InputWithLabel
          id="email"
          label="Email Address"
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="flex-grow"></div> {/* Spacer div to push content down */}
    </div>
  );
}
