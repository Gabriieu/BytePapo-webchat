import { z } from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(6, "msg da senha"),
});

