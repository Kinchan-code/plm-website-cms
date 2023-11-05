import React from "react";
import { Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function PH() {
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
      <Text>School of Public Health</Text>
      <Button
        onClick={() => {
          navigate("/academic-overview");
        }}
      >
        Back
      </Button>
    </div>
  );
}

export default PH;
