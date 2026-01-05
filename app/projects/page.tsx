'use client';

import { ButtonLink } from "@/components/ButtonLink";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
    return (
        <>
            <div className="w-full max-w-7xl flex flex-col py-8">
                <ButtonLink
                    href={'/'}
                    text="Back"
                    newTab={false}
                    iconFirst={true}
                    icon={
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>
                    }
                />

                <hr className="mt-4 mb-8" />

                <h1 className="mb-4 font-extrabold text-4xl">Projects</h1>

                <div className="flex flex-col gap-8 w-full">
                    {
                        projects.map((project, i) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                i={i}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}