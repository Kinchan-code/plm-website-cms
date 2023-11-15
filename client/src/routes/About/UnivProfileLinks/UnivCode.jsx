import React from "react";
import { Image, Text, Box, Divider, List } from "@mantine/core";
import { useNavigate } from "react-router-dom";


function UnivCode({ selectedSublink }) {
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

      <div style={{ padding: ".5rem" }}>
        <Text p="xs">
        The University Code of 2005 was approved by the Board of Regents under Resolution No. 2823 during its 379th regular meeting 
held on October 28, 2005.
        </Text>
      </div>
      
      <div style={{ padding: "1rem" }}>
          <Text>Pursuant to Board Resolution No. 3697 which the Board has approved on 09 October 2014, the University Code of 2005 shall be 
adopted as the continuing, operative University Code and that said Code is, in itself, the implementing guideline.</Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
        PDF HOLDER ITO HA! ++ BUtton
        </Text>
      </div>
    </Box>
  );
}

export default UnivCode;
