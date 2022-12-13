import { Box, Typography } from '@mui/material'

type Props = {
  featureFlag: {
    key: string
    name: string
    description: string
    kind: string
    creationDate: number
  }
}

const FeatureFlag = ({ featureFlag }: Props) => {
  const { key, name, description, kind, creationDate } = featureFlag
  return (
    <Box paddingTop={5}>
      <Box>
        <Typography>{key}</Typography>
      </Box>
      <Box>
        <Typography>{name}</Typography>
      </Box>
      <Box>
        <Typography>{description}</Typography>
      </Box>
      <Box>
        <Typography>{kind}</Typography>
      </Box>
      <Box>
        <Typography>{creationDate}</Typography>
      </Box>
    </Box>
  )
}

export default FeatureFlag
