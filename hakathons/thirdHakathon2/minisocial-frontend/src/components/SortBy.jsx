import { MenuItem, FormControl, Select, InputLabel, Box } from "@mui/material";
import usePostStore from "../state/postStore";

const SortBy = () => {
  const { sortBy, setSortBy } = usePostStore();

  return (
    <Box sx={{ minWidth: 90 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel sx={{ fontSize: "0.75rem" }} id="sort-by-label">
          Sort By
        </InputLabel>
        <Select
          sx={{ fontSize: "0.75rem", height: 40 }}
          labelId="sort-by-label"
          id="sort-by-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          label="Sort By"
        >
          <MenuItem sx={{ fontSize: "0.75rem" }} value="author">
            Author
          </MenuItem>
          <MenuItem sx={{ fontSize: "0.75rem" }} value="content">
            Title
          </MenuItem>
          <MenuItem sx={{ fontSize: "0.75rem" }} value="createdAt">
            Posted
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBy;
