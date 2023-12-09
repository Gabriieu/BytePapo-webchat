import { z } from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const tokenSchema = z.object({
  token: z.string(),
});

export const tokenDataSchema = z.object({
  username: z.string(),
  admin: z.boolean(),
  sub: z.string(),
});
