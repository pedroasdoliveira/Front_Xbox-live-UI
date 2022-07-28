import theme from "assets/styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "router";
import { ThemeProvider } from "styled-components";
import "./App.css";

// const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
