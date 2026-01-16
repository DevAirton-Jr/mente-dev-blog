import Container from "@/components/ui/Container";
import { getPostsByCategory, getSortedPostsData } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    const categories = new Set(posts.map((post) => post.category.toLowerCase()));

    return Array.from(categories).map((category) => ({
        slug: category,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    return {
        title: `${categoryName} | Airton R Jr DEV`,
        description: `Artigos sobre ${categoryName}`,
    }
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const posts = getPostsByCategory(decodedSlug);

    if (!posts || posts.length === 0) {
        // Fallback for categories that might exist but strictly by string comparison
        // But for now, if no posts, show empty state or 404. 
        // User asked to "fix" it, so let's show an empty state instead of 404 if possible, 
        // but strictly dynamic routes usually 404. 
        // Let's stick to standard behavior but ensure our links in Homepage match these slugs.

        // If we are linked here, it means we probably expected content.
        // Let's return a friendly empty state if simpler, or 404.
        // 404 is semantically correct for "no such category".
    }

    const categoryName = decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1);

    return (
        <Container className="py-20">
            <div className="space-y-12">
                <header className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        {categoryName}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Explorando todos os artigos relacionados a {categoryName}.
                    </p>
                </header>

                {posts.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <PostCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
                        <p className="text-xl text-gray-500">Nenhum post encontrado nesta categoria.</p>
                    </div>
                )}
            </div>
        </Container>
    );
}
