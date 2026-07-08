import { motion } from 'motion/react';
import Image from 'next/image';
import { Pill } from './Pill';
import { techStacks } from '@/lib/tech-stacks';
import { ButtonLink } from './ButtonLink';
import { ProjectType } from '@/lib/projects';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface ProjectCardType {
    project: ProjectType;
    i: number;
}

export function ProjectCard({ project, i }: ProjectCardType) {
    return (
        <motion.div
            key={project.id}
            className="flex flex-col gap-4 overflow-hidden rounded-lg border border-gray-300 shadow-lg transition duration-500 hover:shadow-2xl xl:flex-row"
            initial={{
                x: i % 2 == 0 ? 100 : -100,
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
            <div className="relative aspect-video w-full xl:w-2/5">
                <Image
                    src={`/images/projects/${project.id}/${project.screenshots[0].nameFile}`}
                    alt={project.screenshots[0].description}
                    title={project.screenshots[0].description}
                    fill
                    sizes="(max-width: 1280px) 100vw, 20vw"
                />
            </div>

            <div className="p-4 xl:w-3/5">
                <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
                <p className="mb-4 line-clamp-3 text-lg text-gray-700">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStacks.slice(0, 3).map((projectTechStack) => (
                        <Pill
                            key={projectTechStack}
                            text={
                                techStacks.find((item) => item.id === projectTechStack)?.name ??
                                'Technology'
                            }
                            imageSrc={`/images/tech-stacks/${projectTechStack}.png`}
                            imageAlt={
                                techStacks.find(
                                    (dataTechStack) => dataTechStack.id === projectTechStack,
                                )?.name ?? 'Technology'
                            }
                        />
                    ))}
                    {project.techStacks.length > 3 && (
                        <Pill text={'+' + (project.techStacks.length - 3).toString() + ' more'} />
                    )}
                </div>

                <ButtonLink href={`projects/${project.id}`} title="Detail" newTab={false}>
                    <span>Detail</span>
                    <ArrowRightIcon />
                </ButtonLink>
            </div>
        </motion.div>
    );
}
