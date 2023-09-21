import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import Home from "./routes/Home";
import Test from "./routes/Test";
import "./App.css";
import Test2 from "./routes/Test2";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <Routes>
            {" "}
            <Route
              path="/"
              element={
                <>
                  <Home></Home>
                </>
              }
            />
            <Route
              path="/test"
              element={
                <>
                  <Test></Test>
                </>
              }
            />
            <Route
              path="/test2"
              element={
                <>
                  <Test2></Test2>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
