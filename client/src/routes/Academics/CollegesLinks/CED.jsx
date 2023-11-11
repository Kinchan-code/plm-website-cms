import React from "react";
import { Image, Text, Box, Divider, Button } from "@mantine/core";
import Introduction from "../../../Components/Introduction";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function CED({ selectedSublink }) {
  const navigate = useNavigate();
  return (
    <Box style={{ fontFamily: "Open Sans, sans serif" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text size="1.5rem" fw="bold" p="xs">
          {selectedSublink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <Introduction
        src={pic}
        content="The College of Education was formed out of reorganization and merging of colleges that were approved by the Board of Regents on June 4, 2015. It aspires to be one of the country's centers of excellence in Teacher Education. It is committed to produce globally empowered quality graduates who are proactive and catalysts of social transformation."
      />
    </Box>
  );
}

export default CED;
