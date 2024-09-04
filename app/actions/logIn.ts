"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

import { revalidatePath } from "next/cache";

export type FormState = {
  status: "success" | "error" | "pending";
};

export const login = async (formState: FormState, formData: FormData) => {
	try {
    formState.status = "success";
    await signIn("credentials", formData);
  } catch (error) {
		console.log(error);
    if (error instanceof AuthError) formState.status = "error";
  }
  // formState.status = "success";
  // const signin = await signIn("credentials", formData);
	// console.log(signin);

  // revalidatePath("/", "layout");

  return {
    status: formState.status,
  };
};
