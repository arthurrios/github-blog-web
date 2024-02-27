import { z } from 'zod'

const envSchema = z.object({
  VITE_GITHUB_USERNAME: z.string(),
  VITE_GITHUB_REPONAME: z.string(),
})

export const env = envSchema.parse(import.meta.env)
