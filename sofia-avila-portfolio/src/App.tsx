import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import PortfolioHeader from "./components/PortfolioHeader";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Studies from "./components/Studies";
import Contact from "./components/Contact";
import Proyects from "./components/Proyects";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PortfolioHeader />
      <Box id="about-me">
        <AboutMe />
      </Box>
      <Box id="experience">
        <Experience />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>
      <Box id="studies">
        <Studies />
      </Box>
      <Box id="projects">
        <Proyects />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
