import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LocationCreateArgs>({
  location: {
    one: {
      data: {
        name: 'String',
        created_by_user: { create: { auth0_sub: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        created_by_user: { create: { auth0_sub: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
