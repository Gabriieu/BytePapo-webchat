import { z } from "zod";
import {
  loginSchema,
  tokenDataSchema,
  tokenSchema,
} from "../schemas/login.schema";

export type tLogin = z.infer<typeof loginSchema>;

export type tToken = z.infer<typeof tokenSchema>;

export type tTokenData = z.infer<typeof tokenDataSchema>;
