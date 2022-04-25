import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { auth0_sub: 'String' } },
    two: { data: { auth0_sub: 'String' } },
  },
})

export type StandardScenario = typeof standard
