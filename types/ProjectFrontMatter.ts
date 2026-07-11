import type { TechStacks } from './TechStacks';

export type ProjectFrontMatter = {
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    techStacks: TechStacks[number]['slug'][];
    keywords: string[];
    isFeatured: boolean;
};
