import * as React from "react";
import { Box, Typography } from "@mui/material";

interface PortfolioHeaderProps {
  onDrawerToggle?: () => void;
}

const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({}) => {
  const textStyles = {
    color: "white",
    marginRight: 5,
    fontSize: '1rem',
    
  };

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
        <Typography variant="h6" sx={{ ...textStyles, marginLeft: 2, fontWeight: 600 }}>
          SOFIA AGOSTINA AVILA
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={textStyles}>
          Sobre mí
        </Typography>
        <Typography variant="body1" sx={textStyles}>
          Experiencia
        </Typography>
        <Typography variant="body1" sx={textStyles}>
          Herramientas
        </Typography>
        <Typography variant="body1" sx={textStyles}>
          Estudios
        </Typography>
        <Typography variant="body1" sx={textStyles}>
          Proyectos
        </Typography>
        <Typography variant="body1" sx={textStyles}>
          Contacto
        </Typography>
      </Box>
    </Box>
  );
};

export default PortfolioHeader;
