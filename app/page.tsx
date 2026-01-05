'use client';

import { ButtonLink } from "@/components/ButtonLink";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { motion } from "motion/react";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
    return (
        <div className="w-full max-w-7xl block mx-auto pb-8">
            <Jumbotron />
            <About />
            <Projects />
        </div>
    );
}

function Jumbotron() {
    return (
        <section className="min-h-dvh flex flex-col justify-center items-center">
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .5,
                    },
                }}
                className="mb-2 font-extrabold text-6xl text-center"
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
                        duration: .5,
                        delay: 1,
                    },
                }}
                className="mb-8 font-light text-2xl text-center"
            >
                Someone who is highly dedicated to learning
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
                        duration: .5,
                        delay: 1.5,
                        type: 'spring',
                    }
                }}
            >
                <ButtonLink
                    href="https://github.com/kevinwinardi"
                    text="GitHub"
                    newTab={true}
                    iconFirst={true}
                    icon={
                        <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                        </svg>
                    }
                />

                <ButtonLink
                    href="https://id.linkedin.com/in/kevin-winardi-a266832b6"
                    text="LinkedIn"
                    newTab={true}
                    iconFirst={true}
                    icon={
                        <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>
                    }
                />
            </motion.div>

        </section>
    );
}

function About() {
    return (
        <section className="min-h-dvh flex flex-col justify-center">
            <h2 className="mb-8 font-bold text-4xl text-center">About Me</h2>
            <motion.div
                className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4"
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                    }
                }}
                viewport={{ once: true }}
            >
                <div>
                    <p className="text-lg lg:text-3xl text-gray-700">
                        I'm a computer science student who's very dedicated to learning. I like solve Mathematic problem, writing article, and read technology documentation. I'm currently focused on front-end and back-end website development.
                    </p>
                </div>
                <div className="shrink-0 relative w-48 lg:w-96 aspect-square">
                    <Image
                        src={'/images/web/profile.jpg'}
                        alt="Profile"
                        title="Profile"
                        fill
                        sizes="(max-width: 1024px) 192px, 384px"
                        className="border border-gray-300 rounded shadow-lg transition duration-500 hover:shadow-2xl"
                    />
                </div>
            </motion.div>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects" className="min-h-dvh flex flex-col justify-center items-center">
            <h2 className="mb-8 font-bold text-4xl">Projects</h2>

            <div className="flex flex-col gap-8 mb-12">
                {
                    projects.filter(project => project.isFeatured === true).map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            i={i}
                        />
                    ))
                }
            </div>

            <ButtonLink
                href="/projects"
                text="See More"
                newTab={false}
                iconFirst={false}
                icon={
                    <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                }
            />
        </section>
    );
}