import React, { Suspense } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import "./App.css";
import { AllLinks } from "./routes/routes";

// import {
//   Home,
//   Administration,
//   Contact,
//   OBE,
//   PrideHall,
//   UniversityProfile,
//   Calendar,
//   Colleges,
//   CRS,
//   CLAT,
//   MCAT,
//   PLMAT,
//   Scholarship,
//   Undergrad,
//   Announcements,
//   Gallery,
//   Message,
//   NewsLetter,
//   PressRelease,
//   SpecialReports,
//   Theses,
//   Students,
//   Faculty,
//   Alumni,
//   Partners,
//   Community,
//   PLMEmail,
//   Archive,
//   Error,
//   Test,
//   Test2,
// } from "./routes/routes";

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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* <Route
              path="/"
              element={
                <>
                  <Home></Home>
                </>
              }
            />
            <Route
              path="/administration"
              element={
                <>
                  <Administration></Administration>
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Contact></Contact>
                </>
              }
            />
            <Route
              path="/obe"
              element={
                <>
                  <OBE></OBE>
                </>
              }
            />
            <Route
              path="/pridehall"
              element={
                <>
                  <PrideHall></PrideHall>
                </>
              }
            />
            <Route
              path="/universityprofile"
              element={
                <>
                  <UniversityProfile></UniversityProfile>
                </>
              }
            />
            <Route
              path="/calendar"
              element={
                <>
                  <Calendar></Calendar>
                </>
              }
            />
            <Route
              path="/colleges"
              element={
                <>
                  <Colleges></Colleges>
                </>
              }
            />
            <Route
              path="/crs"
              element={
                <>
                  <CRS></CRS>
                </>
              }
            />
            <Route
              path="/clat"
              element={
                <>
                  <CLAT></CLAT>
                </>
              }
            />
            <Route
              path="/mcat"
              element={
                <>
                  <MCAT></MCAT>
                </>
              }
            />
            <Route
              path="/plmat"
              element={
                <>
                  <PLMAT></PLMAT>
                </>
              }
            />
            <Route
              path="/scholarship"
              element={
                <>
                  <Scholarship></Scholarship>
                </>
              }
            />
            <Route
              path="/undergradprograms"
              element={
                <>
                  <Undergrad></Undergrad>
                </>
              }
            />
            <Route
              path="/announcements"
              element={
                <>
                  <Announcements></Announcements>
                </>
              }
            />
            <Route
              path="/gallery"
              element={
                <>
                  <Gallery></Gallery>
                </>
              }
            />
            <Route
              path="/message"
              element={
                <>
                  <Message></Message>
                </>
              }
            />
            <Route
              path="/newsletter"
              element={
                <>
                  <NewsLetter></NewsLetter>
                </>
              }
            />
            <Route
              path="/pressrelease"
              element={
                <>
                  <PressRelease></PressRelease>
                </>
              }
            />
            <Route
              path="/specialreports"
              element={
                <>
                  <SpecialReports></SpecialReports>
                </>
              }
            />
            <Route
              path="/thesesanddissertation"
              element={
                <>
                  <Theses></Theses>
                </>
              }
            />
            <Route
              path="/students"
              element={
                <>
                  <Students></Students>
                </>
              }
            />
            <Route
              path="/faculty"
              element={
                <>
                  <Faculty></Faculty>
                </>
              }
            />
            <Route
              path="/alumni"
              element={
                <>
                  <Alumni></Alumni>
                </>
              }
            />
            <Route
              path="/partners"
              element={
                <>
                  <Partners></Partners>
                </>
              }
            />
            <Route
              path="/community"
              element={
                <>
                  <Community></Community>
                </>
              }
            />
            <Route
              path="/plmemaillogin"
              element={
                <>
                  <PLMEmail></PLMEmail>
                </>
              }
            />
            <Route
              path="/archive"
              element={
                <>
                  <Archive></Archive>
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
            <Route
              path="*"
              element={
                <>
                  <Error></Error>
                </>
              }
            /> */}

              {/* {AllLinks.map((link, index) => (
                <Route
                  key={index}
                  path={link.path}
                  exact
                  element={link.component}
                />
              )).flat()} */}

              {AllLinks.map((links) =>
                links.map((data, index) => {
                  return (
                    <Route
                      key={index}
                      path={data.path}
                      element={data.component}
                    />
                  );
                })
              ).flat()}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
