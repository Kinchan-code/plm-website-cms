import React from "react";
import { Image, Text, Box, Divider, Button } from "@mantine/core";
import Introduction from "../../../Components/Introduction";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function CHASS({ selectedSublink }) {
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
        content="The College of Humanities, Arts, and Social Sciences (CHASS) emerged through the reorganization/merging of the College of Liberal Arts (CLA) and the College of Mass Communication (CMC), as recommended by the PLM University Council and approved by the Board of Regents on the latter's special meeting on June 4, 2015."
        otherContent="By virtue of the reorganization, the Bachelor of Science in Social Work from the College of Human Development (CHD) and the Master of Arts in Communication Management from the Graduate School of Arts, Science, and Education (GSASE) also became part of CHASS. The merging was also based on the vertical articulation prescribed by the Commission on Higher Education’s Education Reform Agenda."
      />
    </Box>
  );
}

export default CHASS;
