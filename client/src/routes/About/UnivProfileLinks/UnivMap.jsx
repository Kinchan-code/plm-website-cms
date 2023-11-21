import React from "react";
import { Image, Text, Box, Divider } from "@mantine/core";


function UnivMap({ selectedSublink }) {
  const title = selectedSublink.toUpperCase();
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

      <div>
        <Text fz="xl" fw="bold" p="md">
        PICTURE ITO HA!
        </Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
        VICINITY MAP
        </Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
        GOOGLE MAPS?? ITO HA!
        </Text>
      </div>
    </Box>
  );
}

export default UnivMap;