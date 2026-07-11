import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: {
        template: '%s | Kevin Winardi',
        default: 'Kevin winardi',
    },
    description: 'Kevin Winardi portofolio website',
    icons: '/images/web/profile.jpg',
    metadataBase: new URL('https://kevinwinardi.github.io'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
        },
    },
    openGraph: {
        title: 'Kevin Winardi',
        description: 'Kevin Winardi portofolio website',
        siteName: 'Kevin Winardi',
        images: `/images/web/profile.jpg`,
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="antialiased">
                <main className="overflow-x-hidden">{children}</main>
            </body>
        </html>
    );
}
