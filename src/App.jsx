import "./App.scss";
import React from "react";
import NavBar from "./components/layout/NavBar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { grey, blueGrey } from "@mui/material/colors";

import Card from "@mui/material/Card";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const MyApp = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <Card sx={{ minWidth: 275 }}>Lorem</Card>
        <NavBar />
      </Box>
    </div>
  );
};
function App() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

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
        default: blueGrey[900],
        paper: blueGrey[900],
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

export default App;
