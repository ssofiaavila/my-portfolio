import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import PortfolioHeader from "./components/PortfolioHeader";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

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
      <AboutMe/>
      <Experience/>
    </ThemeProvider>
  );
}

export default App;
