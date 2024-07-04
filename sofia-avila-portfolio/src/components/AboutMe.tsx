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
          width: "50rem", // Ancho de la caja de la imagen
          height: "50rem", // Alto de la caja de la imagen
          paddingRight: "2rem", // Espacio entre la imagen y el texto
        }}
      >
        <img
          src={myImage}
          alt="Sofia Avila's profile photo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ paddingLeft: "1rem" }}>
        <Typography
          variant="h2"
          sx={{ color: "white", textAlign: "left", marginBottom: "0.5rem" }}
        >
          Sofia
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "white", textAlign: "left", marginBottom: "0.5rem" }}
        >
          Agostina
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "white", textAlign: "left", marginBottom: "0.5rem" }}
        >
          Avila
        </Typography>
        <Typography
          sx={{ color: "white", textAlign: "left", marginBottom: "0.5rem", maxWidth: '50%' }}
        >
          Mi interés por el desarrollo surgió a partir de que comencé en 2020
          mis estudios universitarios en el 2020. Actualmente soy ingeniera de
          software, especializada en React y Spring Boot.{" "}
        </Typography>

      </Box>
    </Box>
  );
};

export default AboutMe;
