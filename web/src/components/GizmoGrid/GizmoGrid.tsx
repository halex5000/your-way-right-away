import { useEffect, useState } from 'react'

import { Box } from '@mui/material'
import Image from 'mui-image'
import { Resizable } from 're-resizable'
import Draggable from 'react-draggable'
import { Gizmo as GizmoType } from 'types/graphql'

import { useLocation } from '@redwoodjs/router'

import Gizmo from '../Gizmo/Gizmo'

import experimentationImage from './experimentation.png'
import opsDashboard from './ops-dashboard.png'

type Props = {
  gizmos: GizmoType[]
  mode?: 'readonly' | 'editing'
}

const henrysGizmos = [
  {
    id: '3456',
    xCoordinate: 0,
    yCoordinate: 0,
    width: 490,
    height: 395,
    title: 'Evaluations Over Time',
    content: JSON.stringify({
      title: 'Evaluations Over Time',
      evaluationData: [
        {
          name: 'Database Migration',
          link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/dbinfo/targeting',
          evaluationTimeSeries: [],
        },
        {
          name: 'API Version 2',
          link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/apidebug/targeting',
          evaluationTimeSeries: [],
        },
        {
          name: 'Background Styling',
          link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/bgstyle/targeting',
          evaluationTimeSeries: [],
        },
      ],
    }),
  },
  {
    id: '4567',
    xCoordinate: 500,
    yCoordinate: -385,
    width: 1000,
    height: 270,
    title: 'Approval Requests',
    content: JSON.stringify({
      title: 'Approval Request',
      listData: {
        columns: [
          { field: 'requestedBy', headerName: 'Requested By', width: 70 },
          { field: 'dateRequested', headerName: 'Date Requested', width: 70 },
          { field: 'featureFlag', headerName: 'Feature Flag', width: 70 },
          { field: 'reason', headerName: 'Reason', width: 70 },
          { field: 'change', headerName: 'Change', width: 70 },
        ],
        rows: [
          {
            requestedBy: 'Alex',
            dateRequested: '12/25/2022',
            featureFlag: 'Christmas Time',
            reason: "It's Christmas Day",
            change: 'turned on',
          },
          {
            requestedBy: 'Munnawar',
            dateRequested: '12/17/2022',
            featureFlag: 'New User Interface',
            reason: 'Releasing new UI to beta users',
            change: 'Changed targeting rules on New UI',
          },
          {
            requestedBy: 'Cody',
            dateRequested: '12/19/2022',
            featureFlag: 'Migration',
            reason: 'Starting migration',
            change: 'Migration rollout started at 10%',
          },
        ],
      },
    }),
  },
  {
    id: '1234',
    xCoordinate: 500,
    yCoordinate: -370,
    width: 1000,
    height: 200,
    title: 'Feature Flags List',
    content: JSON.stringify({
      title: 'Feature Flags List',
      listData: {
        columns: [
          { field: 'name', headerName: 'Name', width: 70 },
          { field: 'status', headerName: 'Status', width: 70 },
          { field: 'evaluations', headerName: 'Evaluations', width: 70 },
        ],
        rows: [
          {
            name: 'Database Migration',
            status: 'on',
            totalEvaluations: 3920,
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/dbinfo/targeting',
          },
          {
            name: 'API Version 2',
            status: 'on',
            totalEvaluations: 200,
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/apidebug/targeting',
          },
          {
            name: 'Background Styling',
            status: 'off',
            totalEvaluations: 15000,
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/bgstyle/targeting',
          },
        ],
      },
    }),
  },
  {
    id: '2345',
    xCoordinate: 500,
    yCoordinate: -290,
    width: 1000,
    height: 270,
    title: 'Audit Log',
    content: JSON.stringify({
      title: 'Audit Log',
      listData: {
        columns: [
          { field: 'name', headerName: 'Name', width: 70 },
          { field: 'change', headerName: 'Change', width: 70 },
          { field: 'userName', headerName: 'User Name', width: 70 },
        ],
        rows: [
          {
            name: 'Database Migration',
            change: 'turned on',
            userName: 'Munnawar',
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/dbinfo/targeting',
          },
          {
            name: 'API Version 2',
            change: 'turned on',
            userName: 'Alex',
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/apidebug/targeting',
          },
          {
            name: 'Background Styling',
            change: 'changed targeting',
            userName: 'Cody',
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/bgstyle/targeting',
          },
        ],
      },
    }),
  },
]

const karishmasGizmos = [
  {
    id: '3456',
    xCoordinate: 0,
    yCoordinate: 0,
    width: 490,
    height: 395,
    title: 'Evaluations Over Time',
    content: JSON.stringify({
      title: 'Evaluations Over Time',
      evaluationData: [
        {
          name: 'Database Migration',
          link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/dbinfo/targeting',
          evaluationTimeSeries: [],
        },
        {
          name: 'API Version 2',
          link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/apidebug/targeting',
          evaluationTimeSeries: [],
        },
        {
          name: 'Background Styling',
          link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/bgstyle/targeting',
          evaluationTimeSeries: [],
        },
      ],
    }),
  },
  {
    id: '2345',
    xCoordinate: 500,
    yCoordinate: -385,
    width: 900,
    height: 270,
    title: 'Audit Log',
    content: JSON.stringify({
      title: 'Experimentation Results',
      image: {
        src: experimentationImage,
      },
    }),
  },
  {
    id: '4567',
    xCoordinate: 500,
    yCoordinate: -270,
    width: 900,
    height: 270,
    title: 'Approval Requests',
    content: JSON.stringify({
      title: 'Approval Request',
      listData: {
        columns: [
          { field: 'requestedBy', headerName: 'Requested By', width: 70 },
          { field: 'dateRequested', headerName: 'Date Requested', width: 70 },
          { field: 'featureFlag', headerName: 'Feature Flag', width: 70 },
          { field: 'reason', headerName: 'Reason', width: 70 },
          { field: 'change', headerName: 'Change', width: 70 },
        ],
        rows: [
          {
            requestedBy: 'Alex',
            dateRequested: '12/25/2022',
            featureFlag: 'Christmas Time',
            reason: "It's Christmas Day",
            change: 'turned on',
          },
          {
            requestedBy: 'Munnawar',
            dateRequested: '12/17/2022',
            featureFlag: 'New User Interface',
            reason: 'Releasing new UI to beta users',
            change: 'Changed targeting rules on New UI',
          },
          {
            requestedBy: 'Cody',
            dateRequested: '12/19/2022',
            featureFlag: 'Migration',
            reason: 'Starting migration',
            change: 'Migration rollout started at 10%',
          },
        ],
      },
    }),
  },
  {
    id: '1234',
    xCoordinate: 500,
    yCoordinate: -250,
    width: 900,
    height: 200,
    title: 'Feature Flags List',
    content: JSON.stringify({
      title: 'Feature Flags List',
      listData: {
        columns: [
          { field: 'name', headerName: 'Name', width: 70 },
          { field: 'status', headerName: 'Status', width: 70 },
          { field: 'evaluations', headerName: 'Evaluations', width: 70 },
        ],
        rows: [
          {
            name: 'Database Migration',
            status: 'on',
            totalEvaluations: 3920,
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/dbinfo/targeting',
          },
          {
            name: 'API Version 2',
            status: 'on',
            totalEvaluations: 200,
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/apidebug/targeting',
          },
          {
            name: 'Background Styling',
            status: 'off',
            totalEvaluations: 15000,
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/bgstyle/targeting',
          },
        ],
      },
    }),
  },
]

let staticGizmos = [
  {
    id: '3456',
    xCoordinate: 0,
    yCoordinate: 0,
    width: 490,
    height: 395,
    title: 'Evaluations Over Time',
    content: JSON.stringify({
      title: 'Evaluations Over Time',
      evaluationData: [
        {
          name: 'Database Migration',
          link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/dbinfo/targeting',
          evaluationTimeSeries: [],
        },
        {
          name: 'API Version 2',
          link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/apidebug/targeting',
          evaluationTimeSeries: [],
        },
        {
          name: 'Background Styling',
          link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/bgstyle/targeting',
          evaluationTimeSeries: [],
        },
      ],
    }),
  },
  {
    id: '4567',
    xCoordinate: 500,
    yCoordinate: -385,
    width: 1000,
    height: 270,
    title: 'Approval Requests',
    content: JSON.stringify({
      title: 'Approval Request',
      listData: {
        columns: [
          { field: 'requestedBy', headerName: 'Requested By', width: 70 },
          { field: 'dateRequested', headerName: 'Date Requested', width: 70 },
          { field: 'featureFlag', headerName: 'Feature Flag', width: 70 },
          { field: 'reason', headerName: 'Reason', width: 70 },
          { field: 'change', headerName: 'Change', width: 70 },
        ],
        rows: [
          {
            requestedBy: 'Alex',
            dateRequested: '12/25/2022',
            featureFlag: 'Christmas Time',
            reason: "It's Christmas Day",
            change: 'turned on',
          },
          {
            requestedBy: 'Munnawar',
            dateRequested: '12/17/2022',
            featureFlag: 'New User Interface',
            reason: 'Releasing new UI to beta users',
            change: 'Changed targeting rules on New UI',
          },
          {
            requestedBy: 'Cody',
            dateRequested: '12/19/2022',
            featureFlag: 'Migration',
            reason: 'Starting migration',
            change: 'Migration rollout started at 10%',
          },
        ],
      },
    }),
  },
  {
    id: '1234',
    xCoordinate: 500,
    yCoordinate: -370,
    width: 1000,
    height: 200,
    title: 'Feature Flags List',
    content: JSON.stringify({
      title: 'Feature Flags List',
      listData: {
        columns: [
          { field: 'name', headerName: 'Name', width: 70 },
          { field: 'status', headerName: 'Status', width: 70 },
          { field: 'evaluations', headerName: 'Evaluations', width: 70 },
        ],
        rows: [
          {
            name: 'Database Migration',
            status: 'on',
            totalEvaluations: 3920,
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/dbinfo/targeting',
          },
          {
            name: 'API Version 2',
            status: 'on',
            totalEvaluations: 200,
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/apidebug/targeting',
          },
          {
            name: 'Background Styling',
            status: 'off',
            totalEvaluations: 15000,
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/bgstyle/targeting',
          },
        ],
      },
    }),
  },
  {
    id: '2345',
    xCoordinate: 500,
    yCoordinate: -290,
    width: 1000,
    height: 270,
    title: 'Audit Log',
    content: JSON.stringify({
      title: 'Audit Log',
      listData: {
        columns: [
          { field: 'name', headerName: 'Name', width: 70 },
          { field: 'change', headerName: 'Change', width: 70 },
          { field: 'userName', headerName: 'User Name', width: 70 },
        ],
        rows: [
          {
            name: 'Database Migration',
            change: 'turned on',
            userName: 'Munnawar',
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/dbinfo/targeting',
          },
          {
            name: 'API Version 2',
            change: 'turned on',
            userName: 'Alex',
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/apidebug/targeting',
          },
          {
            name: 'Background Styling',
            change: 'changed targeting',
            userName: 'Cody',
            link: 'https://app.launchdarkly.com/ld-demo-booth/demo-1/features/bgstyle/targeting',
          },
        ],
      },
    }),
  },
]

const GizmoGrid = ({ gizmos, mode }: Props) => {
  const { pathname, search, hash } = useLocation()

  // console.log('location information', { pathname, search, hash })

  //todo get the last part of the pathname and do a lookup on which dashboard to show

  const dashboardId = pathname.substring(pathname.lastIndexOf('/') + 1)

  console.log('dashboard id', dashboardId)

  const dashboards = {
    clbqowzn100000j8d0a3u7z5y: karishmasGizmos,
    clbqox85o00020j8d9euasf2u: henrysGizmos,
    clbqoxfpn00040j8d7m0z2ocm: staticGizmos,
    clbqoxlzu00060j8d945h2rk2: 'ops',
  }

  const something = dashboards[dashboardId]

  const [draggingGizmos, setDraggingGizmos] = useState(
    something === 'ops' ? [] : something
  )

  useEffect(() => {
    staticGizmos = [...draggingGizmos]
  }, [draggingGizmos])

  const onDrag = (event, data) => {
    const newX = data.x
    const newY = data.y
    const nodeId = data.node.id
    const id = nodeId.substring(nodeId.indexOf('-') + 1)

    draggingGizmos.map((gizmo) => {
      const tempGizmo = {
        ...gizmo,
      }
      if (gizmo.id === id) {
        tempGizmo.xCoordinate = newX
        tempGizmo.yCoordinate = newY
      }
      return gizmo
    })

    setDraggingGizmos(draggingGizmos)
  }

  const onResize = (event, direction, element, delta) => {
    const nodeId = element.id

    const id = nodeId.substring(nodeId.indexOf('-') + 1)

    draggingGizmos.map((gizmo) => {
      const tempGizmo = {
        ...gizmo,
      }
      if (gizmo.id === id) {
        tempGizmo.width = gizmo.width + delta.width
        tempGizmo.height = gizmo.height + delta.height
      }
      return gizmo
    })
    setDraggingGizmos(draggingGizmos)
  }

  const isEditable = mode === 'editing'

  return (
    <Box minHeight="100%" width="100%" sx={{ backgroundColor: '#e6e6e6' }}>
      {draggingGizmos.length === 0 ? (
        <Image src={opsDashboard} fit="cover" width="100%" />
      ) : (
        draggingGizmos.map((gizmo, index) => {
          return (
            <Draggable
              key={`resizable-${gizmo.id}`}
              defaultPosition={{ x: gizmo.xCoordinate, y: gizmo.yCoordinate }}
              onStop={onDrag}
              disabled={!isEditable}
            >
              <Resizable
                defaultSize={{
                  height: gizmo.height,
                  width: gizmo.width,
                }}
                id={`drag-${gizmo.id}`}
                enable={{
                  top: isEditable,
                  right: isEditable,
                  bottom: isEditable,
                  left: isEditable,
                  topRight: isEditable,
                  bottomRight: isEditable,
                  bottomLeft: isEditable,
                  topLeft: isEditable,
                }}
                onResizeStop={onResize}
              >
                <Gizmo id={`resize-${gizmo.id}`} gizmo={gizmo} index={index} />
              </Resizable>
            </Draggable>
          )
        })
      )}
    </Box>
  )
}

export default GizmoGrid
