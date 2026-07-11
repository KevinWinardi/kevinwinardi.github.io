import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectFrontMatter } from '@/types/ProjectFrontMatter';

const dir = 'projects';

function getProjectFrontmatter(slug: string) {
    const fileContent = fs.readFileSync(path.join(dir, `${slug}.mdx`), 'utf-8');
    const { data } = matter(fileContent);
    const frontMatter = data as ProjectFrontMatter;

    return {
        ...frontMatter,
    };
}

function getProjectsFrontmatter(amount?: number) {
    const files = fs.readdirSync(path.join(dir));

    let projects = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(dir, filename), 'utf-8');
        const { data } = matter(fileContent);
        const frontMatter = data as ProjectFrontMatter;
        return {
            ...frontMatter,
        };
    });
    projects.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));

    if (typeof amount === 'number') {
        projects = projects.slice(0, amount);
    }

    return projects;
}

export { getProjectFrontmatter, getProjectsFrontmatter };
