import type { TechStacks } from './TechStacks';

export type ProjectFrontMatter = {
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    categories: string[];
    tags: TechStacks[number]['slug'][];
    is_featured: boolean;
};
