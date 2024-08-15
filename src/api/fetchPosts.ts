// app/utils/fetchPosts.ts

import { BlogPost } from "@/common/types";

let cachedPosts: BlogPost[] | [];

export async function fetchPosts(): Promise<BlogPost[]> {
  if (!cachedPosts) {
    const res = await fetch("http://127.0.0.1:8000/api/posts/");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    cachedPosts = await res.json();
  }
  return cachedPosts;
}
