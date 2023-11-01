import React, { Suspense } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import {
  ColorSchemeProvider,
  MantineProvider,
  Text,
  Loader,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import "./App.css";
import { AllLinks } from "./routes/routes";

// Mantine provider is not yet final so don't mind it muna

function App() {
  // Mantine color scheme provider
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
      {/* Mantine theme provider */}
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {/* Routing */}
        <BrowserRouter>
          {/* Loading */}
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Text>Loading...</Text> */}
                <Loader color="#022f76" />
              </div>
            }
          >
            <Routes>
              {/* Array of all the routes from routes.js */}
              {AllLinks.map((link, index) => (
                <Route
                  key={index}
                  path={link.path}
                  exact
                  element={<link.component />}
                />
              )).flat()}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
