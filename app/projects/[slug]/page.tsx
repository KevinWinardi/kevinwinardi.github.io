import { getProjectsFrontmatter } from '@/lib/project-frontmatter';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { default: Project } = await import(`@/projects/${slug}.mdx`);

    return <Project />;
}

export function generateStaticParams() {
    const projects = getProjectsFrontmatter();

    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export const dynamicParams = false;
