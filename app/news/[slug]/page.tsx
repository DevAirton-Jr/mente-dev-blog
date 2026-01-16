import Container from "@/components/ui/Container";
import { getAllContentIds, getContentData } from "@/lib/posts";
import { NewsItem } from "@/types";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const paths = getAllContentIds('news');
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const news = await getContentData(slug, 'news') as NewsItem;

    return {
        title: `${news.title} | Notícias | Mente Dev`,
        description: news.description,
    }
}

export default async function NewsPage({ params }: Props) {
    const { slug } = await params;
    const news = await getContentData(slug, 'news') as NewsItem;

    return (
        <Container className="py-20">
            <div className="max-w-3xl mx-auto">
                <Link href="/news" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 mb-8 transition-colors">
                    <ArrowLeft size={16} />
                    Voltar para Notícias
                </Link>

                <header className="mb-10 space-y-4 text-center">
                    <div className="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {format(parseISO(news.date), 'd MMMM, yyyy', { locale: ptBR })}
                        </span>
                        <span>•</span>
                        <span className="font-medium text-primary-600 dark:text-primary-400">
                            {news.category}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 text-pretty">
                        {news.title}
                    </h1>

                    {news.source && (
                        <div className="pt-4">
                            <a href={news.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 text-sm font-medium hover:underline">
                                Fonte: {news.source}
                                <ExternalLink size={12} />
                            </a>
                        </div>
                    )}
                </header>

                <article
                    className="prose prose-lg dark:prose-invert mx-auto"
                    dangerouslySetInnerHTML={{ __html: news.contentHtml || '' }}
                />
            </div>
        </Container>
    );
}
