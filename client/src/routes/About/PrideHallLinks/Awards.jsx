import React from "react";
import { Space, Text, Box, Divider, Grid, List } from "@mantine/core";

function Awards({ selectedSublink }) {
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
      
      <div style={{ padding: "1rem" }}>
          <Text>From board topnotchers to having a consistent 100% board passing rate, PLM graduates are confident that they won’t just pass but excel in licensure exams.
          Get to know some of the students who continue to make us proud.
          </Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>Get to know some of the students who continue to make us proud.
          </Text>
      </div>
    </Box>
  );
}

export default Awards;
