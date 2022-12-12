import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'

const Search = ({ placeholder }) => (
  <SearchInput placeholder={placeholder} adornment={<SearchAdornment />} />
)
const SearchAdornment = () => {
  return (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  )
}

const SearchInput = ({ placeholder, adornment }) => (
  <TextField
    sx={{ float: 'left' }}
    size="small"
    fullWidth
    placeholder={placeholder}
    InputProps={{ startAdornment: adornment }}
  />
)

export default Search
