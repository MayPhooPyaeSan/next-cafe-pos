import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loading;
