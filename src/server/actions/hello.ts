"use server";
import { z } from "zod";
import { action } from "@/server/lib/safe-action";

export const helloServer = async () => {
  return "Hello from server";
};

export const sayHelloAction = action(z.string(), async (username) => {
  return {
    success: `Hello ${username} !!!`,
  };
});
