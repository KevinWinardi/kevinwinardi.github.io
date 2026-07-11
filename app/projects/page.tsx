import type { Metadata } from 'next';

import { Button } from '@/components/Button';
import { ProjectCardListItem } from '@/components/ProjectCardListItem';
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon';

import { getProjectsFrontmatter } from '@/lib/project-frontmatter';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Projects completed by Kevin Winardi',
    openGraph: {
        title: 'Projects',
        description: 'Projects completed by Kevin Winardi',
    },
};

export default function Page() {
    const projects = getProjectsFrontmatter();

    return (
        <section className="mx-auto flex w-full max-w-5xl flex-col p-4 lg:px-8">
            <Button href="/" title="Back" newTab={false}>
                <ArrowLeftIcon />
                <span>Back</span>
            </Button>

            <hr className="mt-4 mb-8" />

            <h1 className="mb-4 text-4xl font-extrabold">Projects</h1>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {projects.map((project, i) => (
                    <ProjectCardListItem key={project.slug} project={project} i={i} />
                ))}
            </div>
        </section>
    );
}
