import Link from 'next/link';
import React from 'react';

interface ButtonLinkProps {
    href: string;
    title: string;
    newTab: boolean;
    children: React.ReactNode;
}

export function ButtonLink({ href, title, newTab, children }: ButtonLinkProps) {
    return (
        <Link
            href={href}
            target={newTab ? '_blank' : '_self'}
            title={title}
            className="flex w-max gap-2 rounded border-2 border-b-6 border-b-black p-2 font-semibold shadow-md transition duration-500 hover:translate-y-1 hover:border-transparent hover:opacity-75"
        >
            {children}
        </Link>
    );
}
