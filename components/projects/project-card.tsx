import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 w-full bg-background border border-border rounded-lg h-full flex flex-col">
      <div className="relative w-full h-[200px] flex-shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
        <Image
          className={
            project.id === "digital-lifelines-website" || project.id === "digital-lifelines-app"
              ? "object-contain p-4"
              : "object-cover"
          }
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {project.shortDescription}
        </p>
        <p>
          {project.websiteLink ? (
            <Link
              href={project.websiteLink}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Visit Website
            </Link>
          ) : null}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant={"default"} className="mt-2 w-full sm:w-auto">
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      {project.githubLink ? (
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.companyName} on GitHub`}
          className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border hidden md:flex items-center justify-center transition-colors hover:bg-muted"
        >
          <Icons.github className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}
