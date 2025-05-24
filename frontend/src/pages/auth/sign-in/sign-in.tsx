import { LoginForm } from "@/features";
import { NavLink } from "react-router";

export const SignInPage = () => {
  return (
    <>
      <h1>Log in</h1>
      <p>Enter in system by typing your details</p>
      <LoginForm />
      <p>
        Don't have account yet? <NavLink to="./signup">Sign up</NavLink>
      </p>
    </>
  );
};
