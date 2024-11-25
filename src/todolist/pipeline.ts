import { z } from 'zod';

export const createTodoSchema = z
  .object({
    name: z.string().min(5),
    description: z.string().min(10).default('default description'),
    priority: z.boolean().default(false),
    status: z.enum(['pending', 'completed']).default('pending'),
  })
  .required();

export const updateTodoSchema = z
  .object({
    name: z.string().min(5).optional(),
    description: z.string().min(10).optional(),
    priority: z.boolean().optional(),
    status: z.enum(['pending', 'completed']).optional(),
  })
  .required();

// export type CreateUserDto = z.infer<typeof createUserSchema>;
