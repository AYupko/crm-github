import { AddProjectForm } from "@/features";
import { ProjectList } from "@/widgets";

export const HomePage = () => {
  return (
    <>
      <section>
        <AddProjectForm />
      </section>
      <ProjectList />
    </>
  );
};
