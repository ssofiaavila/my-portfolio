import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const textStyles = {
  color: "white",
  marginRight: 5,
  fontSize: '1rem',
  cursor: 'pointer',
};

const PortfolioHeader: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#151618",
        height: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ ...textStyles, marginLeft: 5 }}>
          SOFIA AGOSTINA AVILA
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ScrollLink to="about-me" smooth={true} duration={500}>
          <Typography variant="body1" sx={textStyles}>
            Sobre mí
          </Typography>
        </ScrollLink>
        <ScrollLink to="experience" smooth={true} duration={500}>
          <Typography variant="body1" sx={textStyles}>
            Experiencia
          </Typography>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500}>
          <Typography variant="body1" sx={textStyles}>
            Herramientas
          </Typography>
        </ScrollLink>
        <ScrollLink to="studies" smooth={true} duration={500}>
          <Typography variant="body1" sx={textStyles}>
            Estudios
          </Typography>
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>
          <Typography variant="body1" sx={textStyles}>
            Proyectos
          </Typography>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>
          <Typography variant="body1" sx={textStyles}>
            Contacto
          </Typography>
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default PortfolioHeader;
