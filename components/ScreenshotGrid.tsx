'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';

type ScreenshotGridType = {
    project: string;
    screenshots: { fileName: string; description: string }[];
};

const MotionImage = motion.create(Image);

export function ScreenshotGrid({ project, screenshots }: ScreenshotGridType) {
    const [selected, setSelected] = useState<{
        fileName: string;
        description: string;
    } | null>(null);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screenshot) => (
                <div
                    key={screenshot.fileName}
                    className={`relative ${selected?.fileName === screenshot.fileName && 'z-50'} aspect-video`}
                >
                    <MotionImage
                        layoutId={screenshot.fileName}
                        src={`/images/projects/${project}/${screenshot.fileName}`}
                        alt={screenshot.description}
                        title={screenshot.description}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="cursor-pointer rounded-lg border border-neutral-500 object-cover transition-opacity duration-500 hover:opacity-75"
                        onClick={() => setSelected(screenshot)}
                    />
                </div>
            ))}

            {selected && <div className="fixed inset-0 z-40 bg-white"></div>}

            <AnimatePresence>
                {selected && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelected(null)}
                    >
                        <div className="relative mx-auto aspect-video max-h-full w-full max-w-5xl overflow-hidden">
                            <MotionImage
                                layoutId={selected.fileName}
                                src={`/images/projects/${project}/${selected.fileName}`}
                                alt={selected.description}
                                title={selected.description}
                                fill
                                sizes="90vw"
                                className="rounded-lg border border-neutral-500 object-cover"
                            />
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
