import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant="contained" color="primary">
          Click me
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
