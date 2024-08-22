// app/utils/fetchPosts.ts

import { BlogPost } from "@/common/types";

export async function fetchPosts(): Promise<BlogPost[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/posts/`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
