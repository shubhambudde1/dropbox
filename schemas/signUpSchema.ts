<<<<<<< HEAD
import * as z from "zod";

export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),
    passwordConfirmation: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });
=======
import * as z from 'zod';

export const signUpSchema = z.object({
email: z.string()
.min(1, { message: "Email is required" })
.email({ message: "Invalid email" }),
password: z.string()
.min(1, { message: "Password is required" })
.min(6, { message: "Password must be at least 6 characters long" }),
confirmPassword: z.string()
.min(1, { message: "Confirm password is required" })

})
.refine((data) => data.password === data.confirmPassword, {
message: "Passwords do not match",
path: ["confirmPassword"],
});

>>>>>>> 39d38f8 (droply clone started)
