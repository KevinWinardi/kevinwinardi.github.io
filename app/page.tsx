import { getProjectsFrontmatter } from '@/lib/project-frontmatter';
import { Jumbotron } from './components/Jumbotron';
import { Projects } from './components/Projects';

export default function Home() {
    const projects = getProjectsFrontmatter(4);

    return (
        <div>
            <Jumbotron />
            <Projects projects={projects} />
        </div>
    );
}
