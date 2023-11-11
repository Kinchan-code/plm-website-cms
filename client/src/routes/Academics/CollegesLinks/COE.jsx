import React from "react";
import { Image, Text, Box, Divider, Button } from "@mantine/core";
import Introduction from "../../../Components/Introduction";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function COE({ selectedSublink }) {
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
        content="College Engineering offers a comprehensive education in engineering disciplines. PLM's engineering programs typically emphasize theory, practical skills, and a strong commitment to addressing the unique challenges of the local community."
      />
    </Box>
  );
}

export default COE;
