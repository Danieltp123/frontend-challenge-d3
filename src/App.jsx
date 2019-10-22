import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import AppBar from "./Components/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";

library.add(faMoon);

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%) ok
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - White (Dark Mode Text): hsl(0, 0%, 100%)

// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Light Mode Elements): hsl(0, 0%, 100%)
const setTheme = prefersDarkMode =>
  createMuiTheme({
    palette: {
      primary: {
        main: prefersDarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0 %, 100 %)",
        dark: "hsl(209, 23%, 22%)",
        light: "hsl(0, 0%, 100%)"
      },
      secondary: {
        light: " hsl(0, 0%, 98%)",
        main: "hsl(0, 0%, 100%)",
        dark: "hsl(207, 26%, 17%)"
      },
      background: {
        default: prefersDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"
      },
      type: prefersDarkMode ? "dark" : "light"
    },
    typography: {
      fontFamily: '"Nunito Sans",sans-serif',
      subtitle1: {
        fontWeight: 800,
        fontStyle: "bold"
      }
    }
  });

function App() {
  const [dark, setDark] = React.useState(true);
  const theme = React.useMemo(() => setTheme(dark), [dark]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar dark={dark} setDark={() => setDark(!dark)} />
      <Routes />
    </ThemeProvider>
  );
}
// jogar div em outro arquivo e usar useTheme
export default App;
