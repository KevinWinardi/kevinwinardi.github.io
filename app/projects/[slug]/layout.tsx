import { Button } from '@/components/Button';
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon';
import { getProjectFrontmatter } from '@/lib/project-frontmatter';
import type { Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const frontmatter = getProjectFrontmatter(slug);

    return {
        title: frontmatter.title,
        description: frontmatter.description,
        keywords: frontmatter.tags.join(', '),
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            images: `/images/projects/${slug}/${frontmatter.thumbnail}`,
        },
    };
}

export default async function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="mx-auto flex w-full max-w-5xl flex-col p-4 lg:px-8">
            <Button href="/projects" title="Back" newTab={false}>
                <ArrowLeftIcon />
                <span>Back</span>
            </Button>

            <hr className="mt-4 mb-8" />

            <article className="prose max-w-none rounded-lg border border-neutral-300 p-4 shadow-lg xl:prose-lg prose-headings:wrap-break-word prose-headings:text-black prose-img:m-0">
                {children}
            </article>
        </section>
    );
}
