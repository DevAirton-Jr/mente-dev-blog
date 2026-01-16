import { Post } from "@/types";
import { PostCard } from "./PostCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategorySectionProps {
    title: string;
    posts: Post[];
    slug?: string;
}

export function CategorySection({ title, posts, slug }: CategorySectionProps) {
    if (posts.length === 0) return null;

    return (
        <section className="space-y-8">
            <div className="flex items-baseline justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {title}
                </h2>
                {slug && (
                    <Link href={`/categories/${slug}`} className="group flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 px-4 py-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all">
                        Ver todos
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                )}
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                    <PostCard key={post.id} post={post} index={index} />
                ))}
            </div>
        </section>
    )
}
