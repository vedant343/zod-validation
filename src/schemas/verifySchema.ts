import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().min(6, { message: "verification code must be 6 digits" }),
});
