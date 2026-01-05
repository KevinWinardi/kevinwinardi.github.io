'use client';

import { ProjectType } from "@/lib/projects";
import { ButtonLink } from "@/components/ButtonLink";
import { Pill } from "@/components/Pill";
import { techStacks } from "@/lib/tech-stacks";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const MotionImage = motion.create(Image);

export default function ProjectDetailContent({ project }: { project: ProjectType }) {
    const [zoomedImage, setZoomedImage] = useState<{ nameFile: string, description: string } | null>(null);

    return (
        <div className="w-full max-w-7xl flex flex-col py-8">
            <ButtonLink
                href={'/projects'}
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

            <div className="w-full p-4 border border-gray-300 rounded-lg shadow-lg">
                <h1 className="mb-8 font-extrabold text-4xl">{project.name}</h1>

                <div className="mb-12">
                    <h2 className="font-bold text-2xl">Description</h2>
                    <p className="text-lg text-gray-700">{project.description}</p>
                </div>

                <div className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Key Features</h2>
                    <ul className="list-decimal pl-6 text-lg text-gray-700">
                        {
                            project.keyFeatures.map(feature => (
                                <li key={feature}>{feature}</li>
                            ))
                        }
                    </ul>
                </div>

                <div className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Tech Stacks</h2>
                    <div className="flex flex-wrap gap-4">
                        {
                            project.techStacks.map(projectTechStack => (
                                <Pill
                                    key={projectTechStack}
                                    text={techStacks.find(item => item.id === projectTechStack)?.name ?? 'Technology'}
                                    imageSrc={`/images/tech-stacks/${projectTechStack}.png`}
                                    imageAlt={techStacks.find(dataTechStack => dataTechStack.id === projectTechStack)?.name ?? 'Technology'}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="mb-4 font-bold text-2xl">Screenshots</h2>
                    <div className="columns sm:columns-2 lg:columns-3 space-8 space-y-8">
                        {
                            project.screenshots.map(image => (
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
                            ))
                        }
                        <AnimatePresence>
                            {
                                zoomedImage && (
                                    <div
                                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex justify-center items-center"
                                        onClick={() => setZoomedImage(null)}
                                    >
                                        <MotionImage
                                            layoutId={zoomedImage.nameFile}
                                            src={`/images/projects/${project.id}/${zoomedImage.nameFile}`}
                                            alt={zoomedImage.description}
                                            title={zoomedImage.description}
                                            width={1600}
                                            height={900}
                                            className="cursor-zoom-out max-w-[90vw] max-h-[90vh]"
                                            onClick={() => setZoomedImage(null)}
                                        />
                                    </div>
                                )
                            }
                        </AnimatePresence>
                    </div>
                </div>

                {
                    (project.urlDeploy != undefined || project.repoGitHub != undefined) && (
                        <div>
                            <h2 className="mb-4 font-bold text-2xl">External Links</h2>
                            <div className="flex gap-4">
                                {
                                    project.urlDeploy != undefined && (
                                        <ButtonLink
                                            href={project.urlDeploy}
                                            text="Live Website"
                                            newTab={true}
                                            iconFirst={true}
                                            icon={
                                                <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                                                </svg>
                                            }
                                        />
                                    )
                                }
                                {
                                    project.repoGitHub != undefined && (
                                        <ButtonLink
                                            href={project.repoGitHub}
                                            text="Repo GitHub"
                                            newTab={true}
                                            iconFirst={false}
                                            icon={
                                                <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                                                </svg>
                                            }
                                        />
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
}