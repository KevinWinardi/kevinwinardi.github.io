import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    output: 'export',
    images: {
        unoptimized: true,
    },
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: ['remark-frontmatter', 'remark-mdx-frontmatter'],
    },
});

export default withMDX(nextConfig);
