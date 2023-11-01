import React from "react";
import { Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function ContactUs() {
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
      <Text>Contact Us</Text>
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

export default ContactUs;
