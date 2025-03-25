import {z} from 'zod';

/**
 * Validates a username string with the following rules:
 * - Must be at least 3 characters long.
 * - Must be at most 20 characters long.
 * - Must only contain alphanumeric characters and underscores.
 * - Special characters are not allowed.
 */
export const usernameValidation = z
.string()
.min(3, "Username must be at least 3 characters long")
.max(20, "Username must be at most 20 characters long")
.regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character")

/**
 * Defines the `signUpSchema` object using Zod for validation.
 * - `username`: Validates the username using `usernameValidation`.
 * - `email`: Ensures the email is a valid email address.
 * - `password`: Requires a minimum of 6 characters for the password.
 */
export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
