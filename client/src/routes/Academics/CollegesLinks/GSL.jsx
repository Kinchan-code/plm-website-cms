import React from "react";
import { Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function GSL() {
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
      <Text>Graduate School of Law</Text>
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

export default GSL;
