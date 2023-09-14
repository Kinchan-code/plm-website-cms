import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";

import "./App.css";

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
