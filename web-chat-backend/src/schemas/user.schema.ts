import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  username: z.string().min(4).max(24),
  password: z.string().min(6).max(256),
});

export const userSchemaRequest = userSchema.omit({ id: true });

export const userSchemaResponse = userSchema.omit({ password: true });
