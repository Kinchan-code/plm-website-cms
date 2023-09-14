import React from "react";
import { Text, Header } from "@mantine/core";

function MobileHeader() {
  return (
    <div>
      <Header height={{ base: 50, md: 70 }} p="md">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text>Mobile header</Text>
        </div>
      </Header>
    </div>
  );
}

export default MobileHeader;
