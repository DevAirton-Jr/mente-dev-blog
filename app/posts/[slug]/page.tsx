import Container from "@/components/ui/Container";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return {
        title: `${postData.title} | Mente Dev`,
        description: postData.description,
        openGraph: {
            title: postData.title,
            description: postData.description,
            type: 'article',
            publishedTime: postData.date,
            authors: ['Airton Rita Jr'],
        }
    }
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <Container className="py-12 md:py-20">
            <article className="max-w-3xl mx-auto">
                <header className="mb-10 text-center space-y-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <time dateTime={postData.date}>
                            {format(parseISO(postData.date), 'd MMMM, yyyy', { locale: ptBR })}
                        </time>
                        <span>•</span>
                        <span className="font-medium text-primary-600 dark:text-primary-400">
                            {postData.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 text-pretty">
                        {postData.title}
                    </h1>

                    {postData.tags && (
                        <div className="flex flex-wrap justify-center gap-2 pt-2">
                            {postData.tags.map(tag => (
                                <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <div
                    className="prose prose-lg dark:prose-invert prose-blue mx-auto prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary-600 dark:prose-a:text-primary-400 hover:prose-a:text-primary-500"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
                />
            </article>
        </Container>
    );
}
