import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import ProjectDetailContent from "./_pageContent";

export const dynamicParams = false;

export async function generateStaticParams() {
    return projects.map(project => ({
        slug: project.id,
    }));
}

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const project = projects.find(p => p.id === slug);

    if (!project) return notFound();

    return (
        <ProjectDetailContent project={project} />
    );
}