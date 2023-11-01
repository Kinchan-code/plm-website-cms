import React from "react";
import { Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function SiteGuide() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Site Guide</Text>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        <Text>Back</Text>
      </Button>
    </div>
  );
}

export default SiteGuide;
