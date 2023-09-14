import React from "react";
import { Text, Header } from "@mantine/core";

function WebHeader() {
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
          <Text>Web View header</Text>
        </div>
      </Header>
    </div>
  );
}

export default WebHeader;
