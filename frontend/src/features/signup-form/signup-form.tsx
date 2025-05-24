import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Form, FormError, Input, Label } from "@/shared/ui";
import { useSignUp } from "@/shared/api";
import { signupSchema, SignupValues } from "./schema";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
  });

  const { mutate: signUp, isPending } = useSignUp();

  const onSubmit = (data: SignupValues) => {
    console.log("Sign up data:", data);
    signUp(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        <FormError message={errors.email?.message} />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} />
        <FormError message={errors.password?.message} />
      </div>

      <Button type="submit" disabled={isPending}>
        Sign Up
      </Button>
    </Form>
  );
};
