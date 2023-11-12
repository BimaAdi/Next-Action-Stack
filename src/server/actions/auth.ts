"use server";
import { z } from "zod";
import { action } from "@/server/lib/safe-action";
import { auth } from "@/server/auth/lucia";

export const signUpAction = action(
  z.object({
    username: z.string(),
    password: z.string(),
  }),
  async ({ username, password }) => {
    const user = await auth.createUser({
      key: {
        providerId: "username", // auth method
        providerUserId: username.toLowerCase(), // unique id when using "username" auth method
        password, // hashed by Lucia
      },
      attributes: {
        username,
      },
    });
    return user;
  }
);
