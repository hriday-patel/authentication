"use server";
import { z } from "zod";
import { getEmail, storeData } from "./prisma-db";
import { generateSalt, passwordHashing } from "./passwordHashing";
import { createSession } from "./session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



const SignUpSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(8),
});

const SignInSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
});

export async function signUp(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const parseResult = SignUpSchema.safeParse({
    name,
    email,
    password,
  });

  if (parseResult.success) {
    const user = await getEmail(email);
    if (user != null) return;
    const salt = generateSalt();
    const hashedPassword = await passwordHashing(password, salt);
    const newUser = await storeData(name, email, hashedPassword, salt);
    if(newUser === null) return 
    const sesObj = {id: newUser.id, role: newUser.role};
    const cooky = await cookies();
    await createSession(sesObj, cooky);
    redirect('/');
  }
}

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const parseResult = SignInSchema.safeParse({
    email,
    password,
  });
  if (parseResult.success) {
  }
}
