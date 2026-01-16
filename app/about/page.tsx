"use client";

import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Icons } from "@/components/ui/TechIcons";

export default function AboutPage() {
    return (
        <Container className="py-20">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* CAUTION: This Developer runs on 90% caffeine and 10% sheer willpower ☕ */}
                    {/* Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/3 flex flex-col items-center text-center sticky top-24"
                    >
                        <div className="relative w-48 h-48 mb-6 group">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 blur-xl opacity-50 group-hover:opacity-70 transition-opacity animate-pulse" />
                            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-950 overflow-hidden bg-gray-200 shadow-2xl">
                                <Image
                                    src="/perfil.jpg"
                                    alt="Airton Rita Jr"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Airton Rita Jr</h2>
                        <p className="text-primary-500 dark:text-primary-400 font-medium mb-4">Software Developer</p>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                            Programador e estudante de Engenharia Robótica, explorando sistemas inteligentes, IA e ciência de dados, com paixão por física computacional e inovação tecnológica.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/DevAirton-Jr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:scale-110 transition-all"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/airtonritajr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-[#0077b5] dark:hover:bg-[#0077b5] dark:hover:text-white hover:scale-110 transition-all"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:airtonaparecidoritajunior@gmail.com"
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-red-500 dark:hover:bg-red-500 dark:hover:text-white hover:scale-110 transition-all"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Bio Section */}
                    <motion.div
                        className="w-full md:w-2/3 space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="prose prose-lg dark:prose-invert">
                            <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
                                Sobre Mim
                            </h1>

                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                                Sou <strong>Airton Rita Junior</strong>, analista de sistemas e desenvolvedor de software. Crio soluções completas, de sistemas inteligentes e apps web a automações, integrações complexas, mods de games e IA’s personalizadas.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                                Trabalho com ciência de dados, algoritmos avançados e arquiteturas robustas, escrevo artigos técnicos e tenho paixão por pesquisa acadêmica, especialmente em física computacional.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                                Falo 11 idiomas e expresso minha criatividade em pinturas e escrita de ficção. Aqui compartilho projetos, insights, notícias e análises tech.
                            </p>

                            <h3>Minha Stack Favorita</h3>
                            <div className="flex flex-wrap gap-6 not-prose items-center mt-6">
                                {["Java", "Python", "JavaScript", "TypeScript", "React", "AWS", "SQL"].map((tech, index) => {
                                    // Map SQL to PostgreSQL icon if desired, or keep as SQL
                                    const key = tech === "SQL" ? "PostgreSQL" : tech;
                                    const IconComponent = Icons[key as keyof typeof Icons] || Icons[tech as keyof typeof Icons];
                                    return (
                                        <motion.div
                                            key={tech}
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                            className="relative flex flex-col items-center gap-2 group cursor-pointer"
                                        >
                                            <div className="w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group-hover:border-primary-500 transition-colors">
                                                {IconComponent ? (
                                                    <IconComponent className="w-full h-full" />
                                                ) : (
                                                    <span className="font-bold">{tech[0]}</span>
                                                )}
                                            </div>
                                            <span className="text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">
                                                {tech}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Container>
    );
}
