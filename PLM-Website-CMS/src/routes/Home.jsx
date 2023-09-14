import React, { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import WebView from "../Components/WebView/WebView";
import MobileView from "../Components/MobileView/MobileView";

function Home() {
  const matches = useMediaQuery("(min-width: 56.25em)");

  return <div>{matches ? <WebView /> : <MobileView />}</div>;
}

export default Home;
