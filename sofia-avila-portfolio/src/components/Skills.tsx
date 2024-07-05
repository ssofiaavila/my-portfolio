import { Box, Grid, Typography, Tooltip } from "@mui/material";

const Skills = () => {
  const technologies = [
    { name: "React", url: "https://img.icons8.com/color/48/react-native.png" },
    { name: "JavaScript", url: "https://img.icons8.com/color/48/javascript.png" },
    { name: "TypeScript", url: "https://img.icons8.com/color/48/typescript.png" },
    { name: "Jira", url: "https://img.icons8.com/?size=100&id=bRSLw7KcVIlw&format=png&color=000000" },
    { name: "Spring Boot", url: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
    { name: "Amazon Web Service (AWS)", url: "https://img.icons8.com/?size=100&id=VoXRGxL3ekkk&format=png&color=000000" },
    { name: "Angular", url: "https://img.icons8.com/?size=100&id=71257&format=png&color=000000" },
    { name: "Git", url: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
    { name: "MySQL", url: "https://img.icons8.com/?size=100&id=50030&format=png&color=000000" },
    { name: "C#", url: "https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000" },
    { name: "Java", url: "https://img.icons8.com/?size=100&id=Pd2x9GWu9ovX&format=png&color=000000" },
    { name: ".NET", url: "https://img.icons8.com/?size=100&id=z2gsPTsahvBW&format=png&color=000000" },
    { name: "Swagger", url: "https://img.icons8.com/?size=100&id=rdKV2dee9wxd&format=png&color=000000" },
    { name: "Postman", url: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#232528",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "4rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "white", textAlign: "center", marginBottom: "2rem" }}
      >
        ALGUNAS DE MIS HERRAMIENTAS
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{width: '60rem'}}>
        {technologies.map((tech, index) => (
          <Grid
            item
            xs={4}  
            sm={3}  
            md={2}  
            lg={2}  
            key={index}
            sx={{ textAlign: "center" }}
          >
            <Tooltip title={tech.name} arrow>
              <img width="48" height="48" src={tech.url} alt={tech.name} />
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
