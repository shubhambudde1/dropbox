<<<<<<< HEAD
import * as z from "zod";

export const signInSchema = z.object({
  identifier: z
    .string()
    .min(1, { message: "Email or username is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
});
=======
import * as z from 'zod';

export const signInSchema = z.object({
identifier: z.string()
.min(1, { message: "Email is required" })
.email({ message: "Invalid email" }),
password: z.string()
.min(1, { message: "Password is required" })
.min(6, { message: "Password must be at least 6 characters long" }),

})

>>>>>>> 39d38f8 (droply clone started)
