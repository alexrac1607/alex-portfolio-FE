// app/utils/fetchPosts.ts

import { BlogPost } from "@/common/types";

export async function fetchPosts(): Promise<BlogPost[]> {
  const res = await fetch("http://127.0.0.1:8000/api/posts/");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
