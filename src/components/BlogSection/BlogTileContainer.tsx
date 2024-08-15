"use client";

import { useState } from "react";
import BlogTile from "./BlogTile";
import SearchBar from "../SearchBar";
import { BlogPost } from "@/common/types";

interface BlogTileContainerProps {
  posts: BlogPost[];
}

export default function BlogTileContainer({ posts }: BlogTileContainerProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Blog Posts</h2>
      <SearchBar
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        placeholder="Search Blogposts"
      />
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <BlogTile
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            imageSrc={post.imageSrc}
          />
        ))}
      </div>
      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No blog posts found.</p>
      )}
    </div>
  );
}
