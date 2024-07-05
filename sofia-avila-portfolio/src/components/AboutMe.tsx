import { Box, Typography } from "@mui/material";
import myImage from "../assets/profile.jpeg";

const AboutMe = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#232528",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "50rem", 
          height: "50rem", 
          flexShrink: 0,
          paddingRight: '5rem'
        }}
      >
        <img
          src={myImage}
          alt="Sofia Avila's profile photo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ paddingLeft: "5rem" }}>
        <Typography
          variant="h2"
          sx={{ color: "white", textAlign: "left", marginBottom: "0.5rem", fontWeight: 'bold' }}
        >
          SOFIA
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "white", textAlign: "left", marginBottom: "0.5rem", fontWeight: 'bold' }}
        >
          AGOSTINA
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "white", textAlign: "left", marginBottom: "0.5rem", fontWeight: 'bold' }}
        >
          AVILA
        </Typography>
        <Typography
          sx={{ color: "white", textAlign: "left", marginBottom: "0.5rem", maxWidth: '50%' }}
        >
          Mi interés por el desarrollo surgió a partir de que comencé en 2020
          mis estudios universitarios. Actualmente soy ingeniera de
          software, especializada en React y Spring Boot.{" "}
        </Typography>

      </Box>
    </Box>
  );
};

export default AboutMe;
