import { z } from 'zod';

export const createUserSchema = z
  .object({
    name: z.string().min(10),
    email: z.string().email(),
    password: z
      .string()
      .min(8, {
        message: 'Password is too short, it should be at least 8 characters',
      })
      .max(20),
  })
  .required();

// export type CreateUserDto = z.infer<typeof createUserSchema>;
