import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content must be at least 6 characters" })
    .max(300, { message: "content not must be longer than 300 words" }),
});
