import Container from "@/components/ui/Container";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { CategorySection } from "@/components/blog/CategorySection";
import { getFeaturedPost, getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const allPosts = getSortedPostsData();
  const featuredPost = getFeaturedPost();

  // Filter out featured post from recent list to avoid duplication
  const recentPosts = allPosts.filter(post => post.id !== featuredPost?.id);


  const techPosts = recentPosts.filter(p => p.category === 'Tecnologia');
  const designPosts = recentPosts.filter(p => p.category === 'Design');

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-24">
        <Container>
          {featuredPost ? (
            <FeaturedPost post={featuredPost} />
          ) : (
            <div className="py-20 text-center">
              <h1 className="text-4xl font-bold">Bem-vindo ao Blog</h1>
              <p className="mt-4 text-gray-500">Nenhum post em destaque no momento.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Recent Posts */}
      <Container>
        <CategorySection title="Recentes" posts={recentPosts.slice(0, 6)} />
      </Container>

      {/* Category Sections (conditionally render if we have posts) */}
      {techPosts.length > 0 && (
        <Container>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <CategorySection title="Tecnologia" posts={techPosts} slug="technology" />
          </div>
        </Container>
      )}

      {designPosts.length > 0 && (
        <Container>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <CategorySection title="Design" posts={designPosts} slug="design" />
          </div>
        </Container>
      )}
    </div>
  );
}
