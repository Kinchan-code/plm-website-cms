import React from "react";
import { Space, Text, Box, Divider, Grid, List } from "@mantine/core";

function BEP({ selectedSublink }) {
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
          <Text>PLM is a consistent top-performing university that has produced board topnotchers, and exemplary leaders in the business and public sectors. But don’t just take it from us. We’ll let our awards do the talking.
          </Text>
      </div>
    </Box>
  );
}

export default BEP;
