import {z} from 'zod'

/**
 * Defines the schema for a message object using Zod.
 * 
 * - `content`: A string field that must:
 *   - Be at least 10 characters long (error message: "Content must be at least of 10").
 *   - Be no longer than 300 characters (error message: "Content must be no longer than 300 characters").
 */
export const messageSchema = z.object({
  content : z
  .string()
  .min(10, {message : 'Content must be at least of 10'})
  .max(300, {message : 'Content must be no longer than 300 characters'})
})