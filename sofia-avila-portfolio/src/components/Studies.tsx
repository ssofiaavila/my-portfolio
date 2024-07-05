import { Box, Typography } from "@mui/material";

const Studies = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#151618",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: "4rem",
      }}
    >
      <Typography variant="h4" sx={{ color: "white", textAlign: "left" }}>
        ESTUDIOS
      </Typography>
    </Box>
  );
};
export default Studies;
