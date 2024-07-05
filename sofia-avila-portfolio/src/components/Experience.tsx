import { Box, Grid, Typography } from "@mui/material";
import ensolversIcon from "../assets/ensolversIcon.png";
import DVBAIcon from "../assets/DVBAIcon.png";
import ProfessionalExperienceCard, {
  ProfessionalExperienceCardProps,
} from "./ProfessionalExperienceCard";

const experiences: ProfessionalExperienceCardProps[] = [
  {
    position: "React & Spring boot software engineer",
    company: "Ensolvers",
    companyLogoURL: ensolversIcon,
    startDate: "Diciembre 2023",
    endDate: "Junio 2024",
    description:
      "Durante mi experiencia brindé funcionalidades y soporte a los proyectos Hirelens, Jayaram y Please Smile. Estuve involucrada en el desarrollo y mantenimiento de modelos de datos, servicios y jobs utilizando Spring Boot, incluida la gestión de bases de datos con MySQL. Además, brindé soporte a QA, documentación y diseño de pruebas con JUnit. Otras tareas incluyeron la implementación, mejora y corrección de UI utilizando tecnologías como React, Material UI y Adobe XD, siguiendo prácticas de SCRUM. También utilicé herramientas como GIT/GitHub para el control de versiones, Jira y AWS (Amazon Web Service).",
  },
  {
    position: "Desarrolladora .NET y Angular",
    company: "Dirección de Vialidad de la provincia de Buenos Aires",
    companyLogoURL: DVBAIcon,
    startDate: "Enero 2023",
    endDate: "Diciembre 2023",
    description:
      "Me desempeñé como desarrolladora full-stack. Mis responsabilidades incluyeron la implementación de REST APIs utilizando ASP.NET, Swagger y SQL Server, así como el diseño y desarrollo de interfaces de usuario utilizando Angular y Angular Material. Participé activamente en la reingeniería de sistemas obsoletos, identificando áreas de mejora y realizando revisiones de código críticas. Mantuve una comunicación estrecha con los clientes para entender sus requerimientos y asegurar la alineación con sus expectativas. Además, gestioné el control de versiones utilizando GIT/GitHub para garantizar la integridad y la colaboración efectiva del equipo.",
  },
];

const Experience = () => {
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
        EXPERIENCIA
      </Typography>

      {experiences.map((experience, index) => (
        <ProfessionalExperienceCard key={index} {...experience} />
      ))}
    </Box>
  );
};

export default Experience;
