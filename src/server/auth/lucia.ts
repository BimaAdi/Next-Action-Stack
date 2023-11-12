import { prisma } from "@lucia-auth/adapter-prisma";
import { lucia } from "lucia";
import { web } from "lucia/middleware";
import { prisma as client } from "@/server/db/prisma";

export const auth = lucia({
  adapter: prisma(client),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",

  middleware: web(),
  sessionCookie: {
    expires: false,
  },

  getUserAttributes: (data) => {
    return {
      username: data.username,
    };
  },
});

export type Auth = typeof auth;
