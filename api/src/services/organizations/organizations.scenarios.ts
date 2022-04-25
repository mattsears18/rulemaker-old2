import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.OrganizationCreateArgs>({
  organization: {
    one: { data: { name: 'String' } },
    two: { data: { name: 'String' } },
  },
})

export type StandardScenario = typeof standard
