'use client';

import { ButtonLink } from '@/components/ButtonLink';
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="mb-4 text-8xl font-extrabold text-red-700">404</h1>
            <h2 className="mb-12 text-2xl font-semibold">Not Found</h2>
            <ButtonLink href={'/'} title="Back to Home" newTab={false}>
                <ArrowLeftIcon />
                <span>Back to Home</span>
            </ButtonLink>
        </div>
    );
}
