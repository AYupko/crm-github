import { SignUpForm } from "@/features";
import { NavLink } from "react-router";

export const SignUpPage = () => {
  return (
    <>
      <h1>Create Account</h1>
      <SignUpForm />
      <p>
        Already have an account? <NavLink to="../">Log in</NavLink>
      </p>
    </>
  );
};
