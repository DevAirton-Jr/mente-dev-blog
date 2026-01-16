"use client";

import Link from 'next/link';
import { Post } from '@/types';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedPostProps {
    post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 text-white shadow-2xl group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-gray-950/80 z-0" />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-24 -right-24 w-[30rem] h-[30rem] bg-primary-600/20 blur-3xl rounded-full"
            />

            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 text-sm font-medium border border-primary-500/20 backdrop-blur-md"
                    >
                        <Sparkles size={14} className="text-primary-400" />
                        <span>Destaque da Semana</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        <Link href={`/posts/${post.id}`} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-primary-200 transition-all duration-300">
                            {post.title}
                        </Link>
                    </h2>

                    <p className="text-lg text-gray-300 max-w-2xl text-pretty leading-relaxed">
                        {post.description}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
                        <time dateTime={post.date} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                            {format(parseISO(post.date), 'd MMMM, yyyy', { locale: ptBR })}
                        </time>
                        <span>{post.category}</span>
                    </div>

                    <motion.div
                        whileHover={{ x: 5 }}
                        className="pt-4"
                    >
                        <Link href={`/posts/${post.id}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-900 font-bold hover:bg-primary-50 transition-colors shadow-lg shadow-white/10">
                            Ler Artigo Completo
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
