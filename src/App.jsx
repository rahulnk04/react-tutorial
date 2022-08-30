import "./App.scss";
import React from "react";
import NavBar from "./components/layout/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { HashRouter, Routes, Route } from "react-router-dom";
import TestA from "./components/layout/TestA";
import TestB from "./components/layout/TestB";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...{ 500: "#fff" },
      ...(mode === "dark" && {
        main: "#fff",
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: "#1A202C",
        paper: "#1A202C",
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode: mode,
    }),
    [mode]
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route exact path="/" element={<TestA />} />
              <Route exact path="testa" element={<TestA />} />
              <Route exact path="testb" element={<TestB />} />
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
export { ColorModeContext };
