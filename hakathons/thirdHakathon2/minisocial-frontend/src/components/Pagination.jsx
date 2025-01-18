import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//eslint-disable-next-line
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <>
      {totalPages && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
            gap: 2,
          }}
        >
          <IconButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Page Information */}
          <Typography variant="body1">
            Page {currentPage} of {totalPages}
          </Typography>

          {/* Next Button */}
          <IconButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default Pagination;
