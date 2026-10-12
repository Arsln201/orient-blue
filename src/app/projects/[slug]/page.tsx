import { notFound } from "next/navigation";

import ProjectDetailPage from "@/components/ProjectDetailPage";
import {
  getProject,
  projects,
} from "@/data/projects";

export const instant = false;

type ProjectRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectRoute({
  params,
}: ProjectRouteProps) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter(
    (item) => item.id !== project.id,
  );

  return (
    <ProjectDetailPage
      project={project}
      relatedProjects={relatedProjects}
    />
  );
}