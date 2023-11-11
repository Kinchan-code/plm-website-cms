import React from "react";
import { Image, Text, Box, Divider, Button } from "@mantine/core";
import Introduction from "../../../Components/Introduction";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function CN({ selectedSublink }) {
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
        content="The College of Nursing program provides an intensive nursing practicum that will refine further the nursing competencies to ensure achievement of the Nursing program outcomes required of an entry level. The College of Nursing program aims to develop a professional nurse who is able to assume entry level positions in health facilities or community settings."
        otherContent="It also offers masters' of nursing program which prepares individuals for careers in health care setting through advanced education in specific areas of expertise and to expand their career options. Program's course content and practicum component will provide them with the knowledge and skills necessary to successfully perform the varied managerial role functions which today's organization requires of health care practitioners and will empower them to serve as influential leaders in the design and operation of 21st century health care delivery systems."
      />
    </Box>
  );
}

export default CN;
