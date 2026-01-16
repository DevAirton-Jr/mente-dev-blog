"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check if splash has already been shown in this session
        // const hasShown = sessionStorage.getItem("splashShown");
        // if (hasShown) {
        //   setIsVisible(false);
        //   return;
        // }

        const timer = setTimeout(() => {
            setIsVisible(false);
            // sessionStorage.setItem("splashShown", "true");
        }, 2500); // Duration in ms

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -200 }} // Slide up effect
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-950 text-white"
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                        className="mb-8"
                    >
                        <div className="p-4 bg-primary-600 rounded-2xl shadow-xl shadow-primary-500/20">
                            <Terminal size={48} color="white" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="font-mono text-xl md:text-2xl text-primary-400"
                    >
                        <Typewriter text="> initializing system..." delay={50} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const Typewriter = ({ text, delay }: { text: string; delay: number }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}<span className="animate-pulse">_</span></span>;
};
