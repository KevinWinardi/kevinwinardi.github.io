'use client';

import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps =
    | {
          href: string;
          title: string;
          newTab: boolean;
          children: React.ReactNode;
      }
    | ({
          href?: never;
          title: string;
          newTab?: never;
          children: React.ReactNode;
      } & ButtonHTMLAttributes<HTMLButtonElement>);

export function Button(props: ButtonProps) {
    const baseClass =
        'flex bg-white no-underline items-center w-max gap-2 rounded border-2 border-b-6 border-b-black p-2 font-semibold shadow-md transition duration-500 hover:translate-y-1 hover:border-transparent hover:opacity-75';

    if (props.href) {
        const { href, title, newTab, children } = props;
        return (
            <Link
                href={href}
                target={newTab ? '_blank' : '_self'}
                title={title}
                className={baseClass}
            >
                {children}
            </Link>
        );
    }

    const { title, children, ...buttonProps } = props;
    return (
        <button title={title} className={baseClass} {...buttonProps}>
            {children}
        </button>
    );
}
