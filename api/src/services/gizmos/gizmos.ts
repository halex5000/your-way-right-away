import type {
  QueryResolvers,
  MutationResolvers,
  GizmoRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const gizmos: QueryResolvers['gizmos'] = ({ dashboardId }) => {
  return db.gizmo.findMany({
    where: {
      dashboardId,
    },
  })
}

export const gizmo: QueryResolvers['gizmo'] = ({ id }) => {
  return db.gizmo.findUnique({
    where: { id },
  })
}

export const createGizmo: MutationResolvers['createGizmo'] = ({ input }) => {
  return db.gizmo.create({
    data: input,
  })
}

export const updateGizmo: MutationResolvers['updateGizmo'] = ({
  id,
  input,
}) => {
  return db.gizmo.update({
    data: input,
    where: { id },
  })
}

export const deleteGizmo: MutationResolvers['deleteGizmo'] = ({ id }) => {
  return db.gizmo.delete({
    where: { id },
  })
}

export const Gizmo: GizmoRelationResolvers = {
  dashboard: (_obj, { root }) => {
    return db.gizmo.findUnique({ where: { id: root?.id } }).dashboard()
  },
}
