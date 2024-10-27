import { z, type ZodType } from 'zod'

export type User = {
  '@path': string
  username: string
  name: string
}

export const UserSchema: ZodType<User> = z.object({
  '@path': z.string(),
  username: z.string(),
  name: z.string(),
})
