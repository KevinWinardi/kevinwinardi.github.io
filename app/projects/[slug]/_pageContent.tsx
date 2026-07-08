'use client';

import { ProjectType } from '@/lib/projects';
import { ButtonLink } from '@/components/ButtonLink';
import { Pill } from '@/components/Pill';
import { techStacks } from '@/lib/tech-stacks';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon';
import { ArrowUpRightIcon } from '@/components/icons/ArrowUpRightIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';

const MotionImage = motion.create(Image);

export default function ProjectDetailContent({ project }: { project: ProjectType }) {
    const [zoomedImage, setZoomedImage] = useState<{
        nameFile: string;
        description: string;
    } | null>(null);

    return (
        <div className="flex w-full max-w-7xl flex-col py-8">
            <ButtonLink href={'/'} title="Back" newTab={false}>
                <ArrowLeftIcon />
                <span>Back</span>
            </ButtonLink>

            <hr className="mt-4 mb-8" />

            <div className="w-full rounded-lg border border-gray-300 p-4 shadow-lg">
                <h1 className="mb-8 text-4xl font-extrabold">{project.name}</h1>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold">Description</h2>
                    <p className="text-lg text-gray-700">{project.description}</p>
                </div>

                <div className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
                    <ul className="list-decimal pl-6 text-lg text-gray-700">
                        {project.keyFeatures.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold">Tech Stacks</h2>
                    <div className="flex flex-wrap gap-4">
                        {project.techStacks.map((projectTechStack) => (
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
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold">Screenshots</h2>
                    <div className="columns space-8 space-y-8 sm:columns-2 lg:columns-3">
                        {project.screenshots.map((image) => (
                            <div key={image.nameFile} className="relative aspect-video w-full">
                                <MotionImage
                                    layoutId={image.nameFile}
                                    key={image.nameFile}
                                    src={`/images/projects/${project.id}/${image.nameFile}`}
                                    alt={image.description}
                                    title={image.description}
                                    width={1600}
                                    height={900}
                                    className="cursor-zoom-in transition duration-500 hover:opacity-75"
                                    onClick={() => setZoomedImage(image)}
                                />
                            </div>
                        ))}
                        <AnimatePresence>
                            {zoomedImage && (
                                <div
                                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                                    onClick={() => setZoomedImage(null)}
                                >
                                    <MotionImage
                                        layoutId={zoomedImage.nameFile}
                                        src={`/images/projects/${project.id}/${zoomedImage.nameFile}`}
                                        alt={zoomedImage.description}
                                        title={zoomedImage.description}
                                        width={1600}
                                        height={900}
                                        className="max-h-[90vh] max-w-[90vw] cursor-zoom-out"
                                        onClick={() => setZoomedImage(null)}
                                    />
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {(project.urlDeploy != undefined || project.repoGitHub != undefined) && (
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">External Links</h2>
                        <div className="flex gap-4">
                            {project.urlDeploy != undefined && (
                                <ButtonLink
                                    href={project.urlDeploy}
                                    title="Live Website"
                                    newTab={true}
                                >
                                    <span>Live Website</span>
                                    <ArrowUpRightIcon />
                                </ButtonLink>
                            )}
                            {project.repoGitHub != undefined && (
                                <ButtonLink
                                    href={project.repoGitHub}
                                    title="GitHub Repo"
                                    newTab={true}
                                >
                                    <span>GitHub Repo</span>
                                    <GitHubIcon />
                                </ButtonLink>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
