"use client"; // Needs client for motion

import Link from 'next/link';
import { Post } from '@/types';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface PostCardProps {
    post: Post;
    index?: number;
}

export function PostCard({ post, index = 0 }: PostCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col space-y-3 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-all shadow-sm hover:shadow-xl hover:shadow-primary-500/10 dark:hover:border-primary-800 hover:border-primary-200"
        >
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <time dateTime={post.date}>
                        {format(parseISO(post.date), 'd MMM, yyyy', { locale: ptBR })}
                    </time>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 font-medium border border-primary-100 dark:border-primary-900">
                    {post.category}
                </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                <Link href={`/posts/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                </Link>
            </h3>

            <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                {post.description}
            </p>

            {post.tags && (
                <div className="flex gap-2 pt-2 mt-auto">
                    {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs text-gray-500 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.article>
    );
}
