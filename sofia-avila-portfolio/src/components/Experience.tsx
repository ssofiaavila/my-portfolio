import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#151618",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: '5rem'
      }}
    >
      <Typography
          variant="h4"
          sx={{ color: "white", textAlign: "left", marginBottom: "0.5rem" }}
        >
          Experiencia
        </Typography>
    </Box>
  );
};

export default AboutMe;
