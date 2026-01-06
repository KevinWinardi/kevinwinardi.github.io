import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Kevin Winardi",
    description: "Kevin Winardi portofolio website",
    icons: '/images/web/profile.jpg',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                <main className="flex justify-center px-4 lg:px-16 overflow-x-hidden">
                    {children}
                </main>
            </body>
        </html >
    );
}
