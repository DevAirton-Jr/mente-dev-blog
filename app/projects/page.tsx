import Container from "@/components/ui/Container";
import { Folder, Github, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getSortedProjectsData } from "@/lib/posts";

export default function ProjectsPage() {
    const projects = getSortedProjectsData();

    return (
        <Container className="py-20">
            <header className="mb-16 space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">Projetos</h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
                    Uma coleção de experimentos, utilitários e aplicações completas que desenvolvi.
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`} className="block group">
                        <article className="flex flex-col h-full p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 transition-all hover:shadow-2xl hover:shadow-primary-500/10">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                                    <Folder size={24} />
                                </div>
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                    {project.status}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary-500 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-500 dark:text-gray-400 mb-6 flex-1 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags?.map(tag => (
                                    <span key={tag} className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 mt-auto">
                                Ver Detalhes
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </Container>
    );
}
