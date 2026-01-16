import Container from "@/components/ui/Container";
import { Newspaper, ExternalLink } from "lucide-react";
import { getSortedNewsData } from "@/lib/posts";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function NewsPage() {
    const news = getSortedNewsData();

    return (
        <Container className="py-20">
            <header className="mb-12 flex items-center gap-3">
                <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                    <Newspaper size={24} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Notícias Tech</h1>
                    <p className="text-gray-500 dark:text-gray-400">O que está rolando no mundo da tecnologia.</p>
                </div>
            </header>

            <div className="space-y-6 max-w-3xl">
                {news.map((item) => (
                    <Link key={item.id} href={`/news/${item.id}`} className="block group">
                        <article className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900 transition-all hover:shadow-lg">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                    {item.title}
                                </h3>
                                <span className="text-xs font-medium text-gray-400 whitespace-nowrap">
                                    {format(parseISO(item.date), 'd MMM, yyyy', { locale: ptBR })}
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                {item.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <span className="text-red-500">{item.source}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1 group-hover:underline">
                                    Ler notícia completa <ExternalLink size={10} />
                                </span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </Container>
    );
}
