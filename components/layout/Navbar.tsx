"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Terminal, Rss, Layers, Newspaper } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import clsx from "clsx";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Artigos", href: "/articles" },
        { name: "Projetos", href: "/projects" },
        { name: "Notícias Tech", href: "/news" },
        { name: "Sobre", href: "/about" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md transition-all duration-300">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="group flex items-center gap-2 font-bold text-xl tracking-tight transition-opacity">
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="p-1.5 bg-primary-600 rounded-lg text-white shadow-lg shadow-primary-500/30"
                        >
                            <Terminal size={20} />
                        </motion.div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:to-primary-500 transition-all">
                            Mente Dev
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                                    pathname === item.href
                                        ? "text-primary-600 dark:text-primary-400"
                                        : "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                                )}
                            >
                                {pathname === item.href && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-primary-100/50 dark:bg-primary-900/30 rounded-full"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-label="Toggle theme"
                    >
                        {mounted ? (
                            theme === "dark" ? <Sun size={20} /> : <Moon size={20} />
                        ) : (
                            <div className="w-5 h-5 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
                        )}
                    </motion.button>
                </div>
            </Container>
        </header>
    );
}
