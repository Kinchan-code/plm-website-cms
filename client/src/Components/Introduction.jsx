import React from "react";
import { Image, Text, SimpleGrid } from "@mantine/core";
import pic from "../routes/Academics/Images/crs.png";

function Introduction({ content, otherContent }) {
  return (
    <>
      <SimpleGrid cols={2}>
        <div>
          <Image maw={500} src={pic} p="md" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text p="md" ta="justify">
            {content}
          </Text>
        </div>
      </SimpleGrid>
      <div>
        <Text p="md" ta="justify">
          {otherContent}
        </Text>
      </div>
    </>
  );
}

export default Introduction;
