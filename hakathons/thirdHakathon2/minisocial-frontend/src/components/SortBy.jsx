import { MenuItem, FormControl, Select, InputLabel, Box } from "@mui/material";
import usePostStore from "../state/postStore";

const SortBy = () => {
  const { sortBy, setSortBy } = usePostStore();

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="author">Author</MenuItem>
          <MenuItem value="content">Title</MenuItem>
          <MenuItem value="createdAt">Created At</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBy;
