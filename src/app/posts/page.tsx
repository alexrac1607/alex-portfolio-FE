"use client";
import BlogTileContainer from "@/components/BlogSection/BlogTileContainer";
import posts from "../../../public/posts.json";

export default function PostsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
      <BlogTileContainer posts={posts} />
    </div>
  );
}
