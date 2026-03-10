import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";
import {
  getBlogPostByIdWithFallback,
  getBlogPostsWithFallback,
} from "@/sanity/lib/sanity-data";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const post = await getBlogPostByIdWithFallback(id);

  if (!post) {
    return {
      title: "Article Not Found | IMMOVABLES REALTY",
    };
  }

  return {
    title: `${post.title} | IMMOVABLES REALTY Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getBlogPostByIdWithFallback(id);

  if (!post) {
    notFound();
  }

  // Get all posts to find related ones
  const allPosts = await getBlogPostsWithFallback();
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <BlogPostClient
      post={{
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        date: post.date,
        readTime: post.readTime,
        author: post.author,
        tags: post.tags || [],
      }}
      relatedPosts={relatedPosts.map((p) => ({
        id: p.id,
        title: p.title,
        excerpt: p.excerpt,
        content: p.content,
        category: p.category,
        date: p.date,
        readTime: p.readTime,
        author: p.author,
        tags: p.tags || [],
      }))}
    />
  );
}
