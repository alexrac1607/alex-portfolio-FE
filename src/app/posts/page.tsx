import BlogTileContainer from "@/components/BlogSection/BlogTileContainer";
import { BlogPost } from "@/common/types";
import { fetchPosts } from "@/api/fetchPosts";

export default async function PostsPage() {
  const posts: BlogPost[] = await fetchPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
      <BlogTileContainer posts={posts} />
    </div>
  );
}
