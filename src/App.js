import { ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
// import theme from "./theme";
import BrandButton from "./BrandButton";

function App() {
  return (
    <>
      <BrandButton>My Primary</BrandButton>
      <br />
      <br />
      <BrandButton>My Secondary</BrandButton>
    </>
  );
}

export default App;
