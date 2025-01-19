import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import postStore from "../state/postStore";

export default function PostPerPage() {
  const { limit, setLimit } = postStore();

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 80 }} className="hidden sm:flex">
      <FormControl fullWidth variant="outlined">
        <InputLabel sx={{ fontSize: ".75rem" }} id="demo-simple-select-label">
          Posts
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={limit}
          label="Post"
          onChange={handleChange}
          sx={{ fontSize: ".75rem", height: 40 }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
