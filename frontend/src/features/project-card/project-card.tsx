import { Project } from "@/entities";
import styles from "./project-card.module.css";
import { Button } from "@/shared/ui";
import { formatUnix } from "@/shared/lib";
import {
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from "@/shared/api";
import { Loader } from "@/shared/ui/loader";

type Props = {
  project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const createdAt = formatUnix(project.createdAt);

  const { mutate: update, isPending: isUpdatePending } =
    useUpdateProjectMutation();
  const { mutate: remove, isPending: isDeletePending } =
    useDeleteProjectMutation();

  const isPending = isDeletePending || isUpdatePending;

  return (
    <article className={styles.card}>
      {isPending && <Loader />}
      <div className={styles.header}>
        <h3 className={styles.name}>{project.name}</h3>
        <span className={styles.owner}>by {project.owner}</span>
      </div>

      <p className={styles.url}>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          {project.url}
        </a>
      </p>

      <div className={styles.stats}>
        <span>Stars: {project.stars}</span>
        <span>Forks: {project.forks}</span>
        <span>Issues: {project.issues}</span>
      </div>

      <p className={styles.date}>Created: {createdAt}</p>

      <div className={styles.actions}>
        <Button
          variant="secondary"
          className={styles.update}
          onClick={() => update({ id: project.id })}
        >
          Update
        </Button>
        <Button
          variant="danger"
          className={styles.delete}
          onClick={() => remove({ id: project.id })}
        >
          Delete
        </Button>
      </div>
    </article>
  );
};
