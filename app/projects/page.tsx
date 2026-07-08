'use client';

import { ButtonLink } from '@/components/ButtonLink';
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function Projects() {
    return (
        <>
            <div className="flex w-full max-w-7xl flex-col py-8">
                <ButtonLink href={'/'} title="Back" newTab={false}>
                    <ArrowLeftIcon />
                    <span>Back</span>
                </ButtonLink>

                <hr className="mt-4 mb-8" />

                <h1 className="mb-4 text-4xl font-extrabold">Projects</h1>

                <div className="flex w-full flex-col gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} i={i} />
                    ))}
                </div>
            </div>
        </>
    );
}
