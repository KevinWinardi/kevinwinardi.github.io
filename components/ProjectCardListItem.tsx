'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import { Button } from './Button';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { TechStackCard } from './TechStackCard';

import type { ProjectFrontMatter } from '@/types/ProjectFrontMatter';

export function ProjectCardListItem({ project, i }: { project: ProjectFrontMatter; i: number }) {
    return (
        <motion.div
            className="flex flex-col overflow-x-hidden rounded-lg border border-gray-300 shadow-lg transition duration-500 hover:shadow-2xl"
            initial={{
                x: i % 2 == 0 ? -100 : 100,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: i * 0.25,
                },
            }}
            viewport={{ once: true }}
        >
            <div className="relative aspect-video h-auto w-full">
                <Image
                    src={`/images/projects/${project.slug}/${project.thumbnail}`}
                    alt={project.title}
                    title={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>

            <div className="p-4">
                <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>

                <TechStackCard techStacks={project.tags} />

                <Button href={`projects/${project.slug}`} title="Detail" newTab={false}>
                    <span>Detail</span>
                    <ArrowRightIcon />
                </Button>
            </div>
        </motion.div>
    );
}
