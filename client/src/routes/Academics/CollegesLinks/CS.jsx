import React from "react";
import { Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function CS() {
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
      <Text>College of Science</Text>
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

export default CS;
