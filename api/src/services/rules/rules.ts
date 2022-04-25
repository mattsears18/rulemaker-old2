import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const rules = () => {
  return db.rule.findMany()
}

export const rule = ({ id }: Prisma.RuleWhereUniqueInput) => {
  return db.rule.findUnique({
    where: { id },
  })
}

interface CreateRuleArgs {
  input: Prisma.RuleCreateInput
}

export const createRule = ({ input }: CreateRuleArgs) => {
  return db.rule.create({
    data: input,
  })
}

interface UpdateRuleArgs extends Prisma.RuleWhereUniqueInput {
  input: Prisma.RuleUpdateInput
}

export const updateRule = ({ id, input }: UpdateRuleArgs) => {
  return db.rule.update({
    data: input,
    where: { id },
  })
}

export const deleteRule = ({ id }: Prisma.RuleWhereUniqueInput) => {
  return db.rule.delete({
    where: { id },
  })
}
