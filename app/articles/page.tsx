import Container from "@/components/ui/Container";
import { getSortedPostsData } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";

export default function ArticlesPage() {
    const posts = getSortedPostsData();

    return (
        <Container className="py-20">
            <div className="space-y-12">
                <header className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        Todos os Artigos
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Arquivo completo de publicações.
                    </p>
                </header>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <PostCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
