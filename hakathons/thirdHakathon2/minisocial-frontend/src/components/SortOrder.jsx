import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

import usePostStore from "../state/postStore";

const SortOrder = () => {
  const { sortOrder, setSortOrder } = usePostStore();
  return (
    <Box sx={{ minWidth: 90, height: 40 }}>
      <ToggleButtonGroup
        sx={{ height: 40 }}
        value={sortOrder}
        exclusive
        onChange={(event, newSortOrder) => {
          if (newSortOrder !== null) {
            setSortOrder(newSortOrder);
          }
        }}
        aria-label="Sort Order"
      >
        <ToggleButton
          sx={{ fontSize: ".75rem" }}
          value="asc"
          aria-label="Ascending"
        >
          Asc
        </ToggleButton>
        <ToggleButton
          value="desc"
          sx={{ fontSize: ".75rem" }}
          aria-label="Descending"
        >
          Desc
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default SortOrder;
