import React from "react";
import { Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Colleges() {
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
      <Text>Colleges</Text>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Back
      </Button>
    </div>
  );
}

export default Colleges;
