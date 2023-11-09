import React from "react";
import { Image, Text, Box, Divider, Button } from "@mantine/core";
import Introduction from "../../../Components/Introduction";
import { useNavigate } from "react-router-dom";

function CM({ selectedLink }) {
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
        content="The College of Medicine accepts applicants for incoming first year medical students who will enter in the first semester of the following school year. Lateral entrees from other medical schools are not entertained. Previous applicants may not apply. 
"
        otherContent="The MCAT applications are opened in November of each year, but applicants may already present their documents to the College staff for evaluation as early as August, so that the applicants are afforded ample time to produce necessary documents that are currently not in their possession."
      />
    </Box>
  );
}

export default CM;
