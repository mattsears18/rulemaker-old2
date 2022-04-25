import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RuleCreateArgs>({
  rule: {
    one: { data: { name: 'String', content: 'String' } },
    two: { data: { name: 'String', content: 'String' } },
  },
})

export type StandardScenario = typeof standard
