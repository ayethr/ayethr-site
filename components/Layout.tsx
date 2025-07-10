import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Submit", href: "/submit" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
];

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
            {/* Background (static, no animation) */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-60 z-0" />

            <header className="relative z-10 p-6 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    Ayethr
                </Link>
                <nav className="flex gap-6 text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-blue-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </header>

            <main className="relative z-10 pt-12 px-4">{children}</main>

            <footer className="relative z-10 text-center py-10 text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Ayethr. All rights reserved.
            </footer>
        </div>
    );
}
