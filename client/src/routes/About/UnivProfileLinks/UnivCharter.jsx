import React from "react";
import { Image, Text, Box, Divider, List } from "@mantine/core";
import { useNavigate } from "react-router-dom";


function Charter({ selectedSublink }) {
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

      <div style={{ padding: ".5rem" }}>
        <Text p="xs">
        Republic Act No. 4196 or “An Act Authorizing the City of Manila to Establish and Operate the University of City of Manila”, 
which created the PLM, is the University Charter. It was signed into law on June 19, 1965.
        </Text>
      </div>
      
      <div style={{ padding: "1rem" }}>
          <Text>According to the charter, the Congress of the Philippines conferred upon the Board of Regents the exclusive power to govern 
the university.</Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
        PDF HOLDER ITO HA! ++ BUtton
        </Text>
      </div>
    </Box>
  );
}

export default Charter;

