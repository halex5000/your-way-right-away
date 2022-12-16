import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import Image from 'mui-image'
import { Gizmo as GizmoType } from 'types/graphql'
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory'

type GizmoProps = {
  gizmo: GizmoType
  index: number
  style?: any
  className?: string
  onMouseDown?: any
  onMouseUp?: any
  onTouchStart?: any
  onTouchEnd?: any
  id: string
}

const DataTable = ({ columns, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(({ headerName }) => (
              <TableCell key={headerName}>{headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {Object.entries(row).map((entry) => {
                // console.log('entry', entry)
                return entry[0] !== 'link' ? (
                  <TableCell key={entry[0]}>{entry[1]}</TableCell>
                ) : null
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const Gizmo = ({
  gizmo,
  style,
  className,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
}: GizmoProps) => {
  console.log(gizmo)
  const { content: json } = gizmo

  const { title, listData, image } = JSON.parse(json)

  const rows = listData?.rows
  const columns = listData?.columns

  // console.log(listData)

  return (
    <Paper
      sx={{ minHeight: '100%', minWidth: '100%' }}
      style={style}
      className={className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box>
            <Typography textAlign="center" variant="h5">
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {image ? (
            <Image src={image.src} fit="contain" width="100%" />
          ) : (
            <Box>
              {listData ? (
                <DataTable columns={columns} rows={rows}></DataTable>
              ) : (
                <VictoryChart theme={VictoryTheme.material}>
                  <VictoryLine
                    interpolation="natural"
                    animate={{
                      duration: 2000,
                      onLoad: { duration: 1000 },
                    }}
                    style={{ data: { stroke: '#405BFF' } }}
                    scale={{ x: 'time', y: 'time' }}
                    data={[
                      { x: '12/1', y: 5000 },
                      { x: '12/2', y: 40000 },
                      { x: '12/3', y: 10000 },
                      { x: '12/4', y: 2000 },
                      { x: '12/5', y: 10000 },
                    ]}
                  />
                  <VictoryLine
                    interpolation="natural"
                    animate={{
                      duration: 2000,
                      onLoad: { duration: 1000 },
                    }}
                    scale={{ x: 'time', y: 'time' }}
                    style={{ data: { stroke: '#FF386B' } }}
                    data={[
                      { x: '12/1', y: 25000 },
                      { x: '12/2', y: 5000 },
                      { x: '12/3', y: 16000 },
                      { x: '12/4', y: 3000 },
                      { x: '12/5', y: 12000 },
                    ]}
                  />
                  <VictoryLine
                    interpolation="natural"
                    animate={{
                      duration: 2000,
                      onLoad: { duration: 1000 },
                    }}
                    style={{ data: { stroke: '#A34FDE' } }}
                    scale={{ x: 'time', y: 'time' }}
                    data={[
                      { x: '12/1', y: 2000 },
                      { x: '12/2', y: 27000 },
                      { x: '12/3', y: 32000 },
                      { x: '12/4', y: 5600 },
                      { x: '12/5', y: 8000 },
                    ]}
                  />
                </VictoryChart>
              )}
            </Box>
          )}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Gizmo
