import { useState } from 'react'

import { Box, FormControl, MenuItem, Select } from '@mui/material'

import FeatureFlagsCell from 'src/components/FeatureFlagsCell'

const FeatureFlagsPage = () => {
  const handleChange = () => {}

  const [project, setProject] = useState('')

  return (
    <>
      <Box>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={project}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="ld-demo-booth">Demo Booth 1</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FeatureFlagsCell projectKey={project} />
      </Box>
    </>
  )
}

export default FeatureFlagsPage
