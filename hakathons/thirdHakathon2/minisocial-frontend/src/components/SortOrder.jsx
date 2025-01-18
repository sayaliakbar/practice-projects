import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

//eslint-disable-next-line
const SortOrder = ({ value, onChange }) => {
  return (
    <Box>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(e, newValue) => {
          if (newValue) {
            onChange(newValue);
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
