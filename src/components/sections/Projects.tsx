import SectionLayout from "@/components/layouts/OtherLayout";

import { Badge } from "@/components/ui/badge";

const ProjectCard = ({}) => {
  return (
    <div className=" p-4 border-border border rounded-md">
      <h3 className="text-xl">Project Name</h3>
      <div className="flex gap-2 flex-wrap my-2">
        <Badge>Python</Badge>
        <Badge>Flask</Badge>
        <Badge>React</Badge>
        <Badge>Next.js</Badge>
      </div>
      <h4 className="text-md text-muted-foreground">
        Project description goes here, project is really hard tho.
      </h4>
    </div>
  );
};

const Projects = () => {
  return (
    <SectionLayout id="projects" title="projects">
      <p>
        Here are some of the projects I've worked on. Each project showcases my
        skills and passion for technology. Feel free to explore and reach out if
        you have any questions or feedback!
      </p>
      <div className="space-y-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </SectionLayout>
  );
};

export default Projects;
