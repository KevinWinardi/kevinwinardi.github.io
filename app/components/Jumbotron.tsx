'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { Button } from '@/components/Button';
import { Wave } from '@/components/Wave';

export function Jumbotron() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center bg-blue-100">
            <div className="relative z-50 flex w-full max-w-5xl flex-col items-center gap-4 px-4 py-12 lg:flex-row-reverse">
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
                            duration: 0.5,
                            type: 'spring',
                        },
                    }}
                    viewport={{ once: true }}
                    className="relative h-32 w-32 shrink-0 overflow-hidden rounded-lg border-2 lg:h-64 lg:w-64"
                >
                    <Image
                        src={'/images/web/profile.jpg'}
                        alt="Profile"
                        title="Profile"
                        fill
                        sizes="(max-width: 1024px) 32px 32px, 64px 64px"
                        loading='eager'
                    />
                </motion.div>

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
                                delay: 1,
                                duration: 0.5,
                            },
                        }}
                        viewport={{ once: true }}
                        className="mb-4 text-center text-4xl font-extrabold lg:text-left lg:text-6xl"
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
                                delay: 2,
                                duration: 1,
                            },
                        }}
                        viewport={{ once: true }}
                        className="mb-4 text-center text-lg font-light lg:text-left lg:text-2xl"
                    >
                        I'm a computer science student who's very dedicated to learning. I like
                        solve Mathematic problem, writing article, and read technology
                        documentation. I'm currently focused on front-end and back-end website
                        development.
                    </motion.p>

                    <motion.div
                        className="flex justify-center gap-4 lg:justify-start"
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delay: 2.5,
                                duration: 0.5,
                                type: 'spring',
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        <Button href="https://github.com/kevinwinardi" title="GitHub" newTab={true}>
                            <span>GitHub</span>
                            <GitHubIcon />
                        </Button>

                        <Button
                            href="https://id.linkedin.com/in/kevin-winardi-a266832b6"
                            title="LinkedIn"
                            newTab={true}
                        >
                            <span>LinkedIn</span>
                            <LinkedInIcon />
                        </Button>
                    </motion.div>
                </div>
            </div>

            <Wave className="absolute bottom-0 z-0" />
        </section>
    );
}
