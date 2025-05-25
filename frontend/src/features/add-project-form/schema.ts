import { z } from "zod";

export const addProjectSchema = z.object({
  path: z
    .string()
    .min(3, { message: "Path is required" })
    .trim()
    .regex(/^[\w-]+\/[\w.-]+$/, {
      message: "Format must be owner/repo (e.g. facebook/react)",
    }),
});

export type FormValues = z.infer<typeof addProjectSchema>;
