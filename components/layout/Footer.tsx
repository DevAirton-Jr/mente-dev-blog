import Container from "@/components/ui/Container";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Mente Dev. Construído por Airton Rita Jr.
                    </p>
                    <div className="flex gap-4">
                        {/* Social links placeholder */}
                        <span className="text-sm text-gray-400">Next.js + Tailwind</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
