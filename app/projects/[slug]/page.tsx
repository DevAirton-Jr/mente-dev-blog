import Container from "@/components/ui/Container";
import { getAllContentIds, getContentData } from "@/lib/posts";
import { Project } from "@/types";
import { Github, Globe, ArrowLeft, Calendar, FileText } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const paths = getAllContentIds('projects');
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = await getContentData(slug, 'projects') as Project;

    return {
        title: `${project.title} | Projetos | Mente Dev`,
        description: project.description,
    }
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = await getContentData(slug, 'projects') as Project;

    return (
        <Container className="py-20">
            <div className="max-w-4xl mx-auto">
                <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 mb-8 transition-colors">
                    <ArrowLeft size={16} />
                    Voltar para Projetos
                </Link>

                <header className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-12">
                    <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between">
                        <div className="space-y-4 max-w-2xl">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                                    {project.category}
                                </span>
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                    {project.status}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                                {project.title}
                            </h1>
                            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 min-w-[200px]">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity">
                                    <Github size={18} />
                                    Ver Código
                                </a>
                            )}
                            {project.demo && project.demo !== '#' && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <Globe size={18} />
                                    Ver Demo
                                </a>
                            )}
                        </div>
                    </div>

                    {project.tags && (
                        <div className="flex flex-wrap gap-2 mt-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm font-mono text-gray-600 dark:text-gray-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <article
                    className="prose prose-lg dark:prose-invert prose-em:text-primary-500"
                    dangerouslySetInnerHTML={{ __html: project.contentHtml || '' }}
                />
            </div>
        </Container>
    );
}
