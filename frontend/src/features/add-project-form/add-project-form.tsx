import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./add-project-form.module.css";
import { useAddProjectMutation } from "@/shared/api";
import { addProjectSchema, FormValues } from "./schema";
import { Button, Form, Input } from "@/shared/ui";

export const AddProjectForm = () => {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: zodResolver(addProjectSchema),
  });

  const { mutate: addProject, isPending } = useAddProjectMutation();

  const onSubmit = (data: FormValues) => {
    addProject({ path: data.path });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <Input
          type="text"
          placeholder="owner/repo (e.g. facebook/react)"
          {...register("path")}
        />
        <Button type="submit" disabled={isPending || !formState.isValid} className={styles.button}>
          Add Repository
        </Button>
      </div>
    </Form>
  );
};
