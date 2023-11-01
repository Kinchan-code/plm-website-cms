import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import "./App.css";
import Home from "./routes/Home";
import Administration from "./routes/About/Administration";
import Contact from "./routes/About/Contact";
import OBE from "./routes/About/OBE";
import PrideHall from "./routes/About/PrideHall";
import UniversityProfile from "./routes/About/UniversityProfile";
import Calendar from "./routes/Academics/Calendar";
import Colleges from "./routes/Academics/Colleges";
import CRS from "./routes/Academics/CRS";
import CLAT from "./routes/Admissions/CLAT";
import MCAT from "./routes/Admissions/MCAT";
import PLMAT from "./routes/Admissions/PLMAT";
import Scholarship from "./routes/Admissions/Scholarship";
import Undergrad from "./routes/Admissions/Undegrad";
import Announcements from "./routes/News/Announcements";
import Gallery from "./routes/News/Gallery";
import Message from "./routes/News/Message";
import NewsLetter from "./routes/News/NewsLetter";
import PressRelease from "./routes/News/PressRelease";
import SpecialReports from "./routes/News/SpecialReports";
import Theses from "./routes/Research/Theses";
import Archive from "./routes/Archive";
import Error from "./routes/Error";
import Test from "./routes/Test";
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
            <Route
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
              path="/test"
              element={
                <>
                  <Test></Test>
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
            />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
