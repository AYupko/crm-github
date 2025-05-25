import styles from "./project-list.module.css";
import { ProjectCard } from "@/features";
import { useGetProjectsQuery } from "@/shared/api";

export const ProjectList = () => {
  const { data: projects = [] } = useGetProjectsQuery();

  return (
    <section>
      <h1>Saved projects {`(${projects.length})`}</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
