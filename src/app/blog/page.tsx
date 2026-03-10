import BlogPageClient from "@/components/BlogPageClient";
import { getBlogPostsWithFallback } from "@/sanity/lib/sanity-data";

export const metadata = {
  title: "Blog | IMMOVABLES REALTY",
  description:
    "Expert advice, market analysis, and strategies to grow your wealth through real estate investment in Ogun State.",
  keywords:
    "real estate blog, investment tips, Ogun State, market trends, property investment guide",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getBlogPostsWithFallback();

  // Transform posts to the format expected by BlogPageClient
  const formattedPosts = posts.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
  }));

  return <BlogPageClient posts={formattedPosts} />;
}
