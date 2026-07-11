'use client';

import Image from 'next/image';

import { techStacks as techStacksList } from '@/lib/tech-stacks';
import { TechStacks } from '@/types/TechStacks';

type TechStackCardType = {
    techStacks: TechStacks[number]['name'][];
};

export function TechStackCard({ techStacks }: TechStackCardType) {
    const techMap = new Map(techStacksList.map((tech) => [tech.name, tech]));

    const tech = techStacks.map((used) => {
        const data = techMap.get(used);
        return {
            slug: data?.slug ?? 'tech',
            name: data?.name ?? 'Tech',
        };
    });

    return (
        <div className="mb-4 flex flex-wrap gap-2">
            {tech.map((techStack, i) => (
                <div
                    key={i}
                    className="flex items-center gap-2 rounded border border-neutral-300 p-2 shadow-md transition duration-500 hover:-translate-y-1"
                >
                    <div className="relative h-6 w-6">
                        <Image
                            src={`/images/tech-stacks/${techStack.slug}.png`}
                            alt={techStack.name}
                            title={techStack.name}
                            fill
                            sizes="24px 24px"
                            className="object-cover"
                        />
                    </div>
                    <span className="text-gray-700">{techStack.name}</span>
                </div>
            ))}
        </div>
    );
}
