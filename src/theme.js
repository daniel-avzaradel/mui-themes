import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[50],
    },
    secondary: {
      main: purple[500],
    },
  },
});

export default theme;
