import { z } from "zod";

export const signInSchema = z.object({
  //username
  identifier: z.string(),
  password: z.string(),
});
