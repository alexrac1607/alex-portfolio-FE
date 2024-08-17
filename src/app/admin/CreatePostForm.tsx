"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputWithLabel from "@/components/LabeledInput";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch("/api/admin/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, content, imageSrc }),
    });

    if (res.ok) {
      alert("Post created successfully!");
      router.push("/admin");
    } else {
      alert("Failed to create post.");
    }
  };

  return (
    <div className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
      <InputWithLabel
        id="title"
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the title"
        required
      />

      <InputWithLabel
        id="description"
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a brief description"
        isTextArea
        required
      />

      <InputWithLabel
        id="content"
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write the content here"
        isTextArea
        required
      />

      <InputWithLabel
        id="imageSrc"
        label="Image URL"
        value={imageSrc}
        onChange={(e) => setImageSrc(e.target.value)}
        placeholder="Enter the image URL"
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Create Post
      </button>
    </div>
  );
}
