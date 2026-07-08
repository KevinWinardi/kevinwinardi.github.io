'use client';

import Image from 'next/image';
import { projects } from '@/lib/projects';
import { motion } from 'motion/react';
import { ButtonLink } from '@/components/ButtonLink';
import { ProjectCard } from '@/components/ProjectCard';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { SearchIcon } from '@/components/icons/SearchIcon';

export default function Home() {
    return (
        <div className="mx-auto block w-full max-w-7xl pb-8">
            <Jumbotron />
            <Projects />
        </div>
    );
}

function Jumbotron() {
    return (
        <section className="my-12 flex flex-col items-center justify-center gap-4 lg:my-0 lg:min-h-screen lg:flex-row">
            <div>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                        },
                    }}
                    viewport={{ once: true }}
                    className="mb-2 text-4xl font-extrabold lg:text-6xl"
                >
                    Kevin Winardi
                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 1,
                            delay: 1,
                        },
                    }}
                    viewport={{ once: true }}
                    className="mb-4 text-lg font-light lg:text-2xl"
                >
                    I'm a computer science student who's very dedicated to learning. I like solve
                    Mathematic problem, writing article, and read technology documentation. I'm
                    currently focused on front-end and back-end website development.
                </motion.p>

                <motion.div
                    className="flex gap-4"
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.5,
                            delay: 1.5,
                            type: 'spring',
                        },
                    }}
                    viewport={{ once: true }}
                >
                    <ButtonLink href="https://github.com/kevinwinardi" title="GitHub" newTab={true}>
                        <span>GitHub</span>
                        <GitHubIcon />
                    </ButtonLink>

                    <ButtonLink
                        href="https://id.linkedin.com/in/kevin-winardi-a266832b6"
                        title="LinkedIn"
                        newTab={true}
                    >
                        <span>LinkedIn</span>
                        <LinkedInIcon />
                    </ButtonLink>
                </motion.div>
            </div>

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                        delay: 2,
                        duration: 0.5,
                        type: 'spring',
                    },
                }}
                viewport={{ once: true }}
                className="relative aspect-square h-48 w-48 shrink-0 overflow-hidden rounded-lg border-2 lg:h-64 lg:w-64"
            >
                <Image src={'/images/web/profile.jpg'} alt="Profile" title="Profile" fill />
            </motion.div>
        </section>
    );
}

function Projects() {
    return (
        <motion.section
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            id="projects"
            className="flex min-h-screen flex-col items-center justify-center"
        >
            <h2 className="mb-8 text-4xl font-bold">Projects</h2>

            <div className="mb-12 flex flex-col gap-8">
                {projects
                    .filter((project) => project.isFeatured === true)
                    .map((project, i) => (
                        <ProjectCard key={project.id} project={project} i={i} />
                    ))}
            </div>

            <ButtonLink href="/projects" title="See More" newTab={false}>
                <span>See More</span>
                <SearchIcon />
            </ButtonLink>
        </motion.section>
    );
}
