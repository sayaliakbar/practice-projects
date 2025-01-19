import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

import usePostStore from "../state/postStore";

const SortOrder = () => {
  const { sortOrder, setSortOrder } = usePostStore();
  return (
    <Box>
      <ToggleButtonGroup
        value={sortOrder}
        exclusive
        onChange={(event, newSortOrder) => {
          if (newSortOrder !== null) {
            setSortOrder(newSortOrder);
          }
        }}
        aria-label="Sort Order"
      >
        <ToggleButton value="asc" aria-label="Ascending">
          Ascending
        </ToggleButton>
        <ToggleButton value="desc" aria-label="Descending">
          Descending
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default SortOrder;
