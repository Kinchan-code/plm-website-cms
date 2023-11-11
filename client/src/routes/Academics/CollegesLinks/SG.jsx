import React from "react";
import { Image, Text, Box, Divider, Button } from "@mantine/core";
import Introduction from "../../../Components/Introduction";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function SG({ selectedSublink }) {
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
        content="The School of Government offers undergraduate and post-graduate programs that aim to make students able professionals and managers in the public sector."
      />
    </Box>
  );
}

export default SG;
