import React from "react";
import { Image, Text, Box, Divider, Button } from "@mantine/core";
import Introduction from "../../../Components/Introduction";
import { useNavigate } from "react-router-dom";

function PH({ selectedLink }) {
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
      <Introduction content="The Pamantasan ng Lungsod ng Maynila School of Public Health is envisioned as a recognized leader in public health education both locally and internationally. It strives to nurture ethical, professional, forward-looking leaders in health care who will confidently blend knowledge and practice to bring real-world solutions to ensure health for all." />
    </Box>
  );
}

export default PH;
