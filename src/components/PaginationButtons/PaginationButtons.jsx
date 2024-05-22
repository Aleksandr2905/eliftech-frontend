import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationButtons = ({ currentPage, totalPages, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        showFirstButton
        showLastButton
        defaultPage={1}
        siblingCount={0}
        boundaryCount={1}
        onChange={handleChange}
        variant="outlined"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#1D1E21",
            backgroundColor: "transparent",
          },
          "& .Mui-selected": {
            backgroundColor: "#59B17A !important",
            color: "white",
            borderColor: "#59B17A",
          },
        }}
      />
    </Stack>
  );
};

export default PaginationButtons;
