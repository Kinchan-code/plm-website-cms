import React from "react";
import { Image, Text, Box, Divider, Button } from "@mantine/core";
import Introduction from "../../../Components/Introduction";
import { useNavigate } from "react-router-dom";

function CS({ selectedLink }) {
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
          {selectedLink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <Introduction
        content="The College of Science is one of the esteemed colleges of the university which has produced board topnotchers, leaders in the national and international levels. It used to be part of the College of Arts and Science, until the Board of Regents approved its 
proposed separation in 2002. By 2015, it offered the programs BS Psychology, MA Psychology, 
and MS in Mathematics Education."
      />
    </Box>
  );
}

export default CS;
