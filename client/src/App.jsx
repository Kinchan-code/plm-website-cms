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
import { AllLinks } from "./routes";

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
        theme={{
          colorScheme,
          colors: {
            color: [
              "#FFFFFF",
              "#f9f8f8",
              "#f7f7f7",
              "#000000",
              "#A31920",
              "#FFC909",
              "#ffc60b",
              "#d5a106",
              "#0087ca",
              "#022f76",
            ],
          },
        }}
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
