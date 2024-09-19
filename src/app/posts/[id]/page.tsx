"use client";

import Image from "next/image";
import { BlogPost } from "@/common/types";

interface PostPageProps {
  params: { id: string };
}

// export function generateStaticParams() {
//   const posts: BlogPost[] = await fetchPosts();

//   return posts.map((post) => ({
//     id: post.id.toString(),
//   }));
// }

export default function PostPage(post: BlogPost) {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
      {post.imageSrc && (
        <Image
          src={post.imageSrc}
          alt={post.title}
          width={800}
          height={400}
          className="mb-4"
        />
      )}
      <p className="text-lg text-gray-700 mb-6">{post.description}</p>
      <div className="prose prose-lg max-w-none">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
