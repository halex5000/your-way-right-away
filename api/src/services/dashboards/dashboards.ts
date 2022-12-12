import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const dashboards: QueryResolvers['dashboards'] = () => {
  return db.dashboard.findMany()
}

export const dashboard: QueryResolvers['dashboard'] = ({ id }) => {
  return db.dashboard.findUnique({
    where: { id },
  })
}

export const createDashboard: MutationResolvers['createDashboard'] = ({
  input,
}) => {
  return db.dashboard.create({
    data: input,
  })
}

export const updateDashboard: MutationResolvers['updateDashboard'] = ({
  id,
  input,
}) => {
  return db.dashboard.update({
    data: input,
    where: { id },
  })
}

export const deleteDashboard: MutationResolvers['deleteDashboard'] = ({
  id,
}) => {
  return db.dashboard.delete({
    where: { id },
  })
}
