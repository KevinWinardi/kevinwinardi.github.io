import { motion } from 'motion/react';
import Image from 'next/image';
import { Pill } from './Pill';
import { techStacks } from '@/lib/tech-stacks';
import { ButtonLink } from './ButtonLink';
import { ProjectType } from '@/lib/projects';

interface ProjectCardType {
    project: ProjectType,
    i: number,
}

export function ProjectCard({ project, i }: ProjectCardType) {
    return (
        <motion.div
            key={project.id}
            className="flex flex-col xl:flex-row gap-4 shadow-lg border border-gray-300 rounded-lg overflow-hidden transition duration-500 hover:shadow-2xl"
            initial={{
                x: i % 2 == 0 ? 100 : -100,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                    duration: .5,
                    delay: i * .25
                }
            }}
            viewport={{ once: true }}
        >
            <div className="relative w-full xl:w-2/5 aspect-video">
                <Image
                    src={`/images/projects/${project.id}/${project.screenshots[0].nameFile}`}
                    alt={project.screenshots[0].description}
                    title={project.screenshots[0].description}
                    fill
                    sizes="(max-width: 1280px) 100vw, 20vw"
                />
            </div>

            <div className="p-4 xl:w-3/5">
                <h3 className="mb-2 font-bold text-2xl">{project.name}</h3>
                <p className="mb-4 text-lg text-gray-700 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {
                        (
                            project.techStacks.slice(0, 3).map(projectTechStack => (
                                <Pill
                                    key={projectTechStack}
                                    text={techStacks.find(item => item.id === projectTechStack)?.name ?? 'Technology'}
                                    imageSrc={`/images/tech-stacks/${projectTechStack}.png`}
                                    imageAlt={techStacks.find(dataTechStack => dataTechStack.id === projectTechStack)?.name ?? 'Technology'}
                                />
                            ))
                        )
                    }
                    {
                        project.techStacks.length > 3 && (
                            <Pill text={'+' + (project.techStacks.length - 3).toString() + ' more'} />
                        )
                    }
                </div>

                <ButtonLink
                    href={`projects/${project.id}`}
                    text="Detail"
                    newTab={false}
                    iconFirst={false}
                    icon={
                        <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>

                    }
                />
            </div>
        </motion.div>
    );
}