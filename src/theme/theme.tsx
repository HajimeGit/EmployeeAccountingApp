import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#3d5a80",
      light: "#fff",
    },
    secondary: {
      main: "#e09f3e",
    },
    background: {
      default: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
