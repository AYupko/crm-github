import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginValues } from "./schema";
import { Button, Form, FormError, Input, Label } from "@/shared/ui";
import { useSignIn } from "@/shared/api";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: login, isPending } = useSignIn();

  const onSubmit = (data: LoginValues) => {
    login(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} placeholder="Enter your email" />
        <FormError message={errors.email?.message} />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} placeholder="Enter your password" />
        <FormError message={errors.password?.message} />
      </div>

      <Button type="submit" disabled={isPending}>
        Login
      </Button>
    </Form>
  );
};
