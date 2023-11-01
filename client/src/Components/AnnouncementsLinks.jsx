import React from "react";
import { Container, SimpleGrid } from "@mantine/core";

function Announcements({ children }) {
  return (
    <div>
      <SimpleGrid
        cols={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "70vh",
            }}
          >
            <Container>{child}</Container>
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Announcements;
