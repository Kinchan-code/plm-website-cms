import React from "react";
import { Image, Text, Box, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { texts } from "./links";
import pic from "./Images/UnivProfile.png";

function Contacts({ selectedLink }) {
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
      <div>
        <Image maw={1000} src={pic} p="md" />
        
          <Text  p="xs" ta="justify">
          We highly prioritize transparent communication with our students, parents, and the broader community. If you have any inquiries, 
issues, or would like to gain further insight into our school, please feel free to contact us. You can easily reach out to us by utilizing 
the contact details supplied below.
          </Text>
      
      </div>
    </Box>
  );
}

export default Contacts;
