'use client';

import { Button } from '@/components/Button';
import { SearchIcon } from '@/components/icons/SearchIcon';
import { ProjectCardListItem } from '@/components/ProjectCardListItem';
import type { ProjectFrontMatter } from '@/types/ProjectFrontMatter';

export function Projects({ projects }: { projects: ProjectFrontMatter[] }) {
    return (
        <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center p-4 lg:px-8">
            <h2 className="mb-8 text-4xl font-bold">Projects</h2>

            <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
                {projects.map((project, i) => (
                    <ProjectCardListItem key={project.slug} project={project} i={i} />
                ))}
            </div>

            <Button href="/projects" title="See More" newTab={false}>
                <span>See More</span>
                <SearchIcon />
            </Button>
        </section>
    );
}
