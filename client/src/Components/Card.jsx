import React from "react";
import { Card, Text, Blockquote } from "@mantine/core";

function CMSCard({ title, content, bgColor, height }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      h={height}
      radius="md"
      bg={bgColor}
      withBorder
    >
      <Card.Section style={{ display: "flex", alignItems: "center" }}>
        <Text fz="xl" fw="bold" p="lg">
          {title}
        </Text>
      </Card.Section>
      <Blockquote p="md">
        <Text>{content}</Text>
      </Blockquote>
    </Card>
  );
}

export default CMSCard;
