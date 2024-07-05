import { Box, Typography } from "@mui/material";

const Proyects = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#232528",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: "4rem",
      }}
    >
      <Typography variant="h4" sx={{ color: "white", textAlign: "left" }}>
        PROYECTOS
      </Typography>
    </Box>
  );
};
export default Proyects;
