"use client";

import { TextField } from "@mui/material";
import SubmitButton from "../Register/Form/SubmitButton";
import { FormState, login } from "@/app/actions/logIn";
import { useFormState } from "react-dom";

const SignInForm = () => {
  const [formState, action] = useFormState(login, {
    status: "pending" as FormState["status"],
  });

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold">Log In To Your Account</h2>
        <p className="text-lg mb-4 opacity-60">
          If you&apos;ve already created your account, sign in below.
        </p>
      </div>
      <form action={action}>
        <div className="flex flex-col gap-4 [&>*]:max-w-[260px] items-center">
          <TextField
            name="email"
            id="email"
            inputMode="email"
            label="Email Address"
            InputLabelProps={{ shrink: true }}
            placeholder="enter email"
            required
            type="email"
          />

          <TextField
            id="password"
            name="password"
            InputLabelProps={{ shrink: true }}
            inputProps={{ minLength: 8 }}
            label="Password"
            placeholder="enter your password"
            required
            type="password"
          />
          <SubmitButton>Log In</SubmitButton>
          {formState.status === "error" && (
            <p className="text-red-500 font-semibold text-center">
              Your credentials are invalid, please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
