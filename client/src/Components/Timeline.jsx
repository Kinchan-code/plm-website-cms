import React from "react";
import { Timeline, Text, Space } from "@mantine/core";

function CMSTimeline({ title, items }) {
  return (
    <div>
      <Text fz="lg" fw="bold">
        {title}
      </Text>
      <Space h="xl" />
      <Timeline active={4} color="color.4" bulletSize={20} lineWidth={2}>
        {items.map((item, index) => (
          <Timeline.Item key={index} title={item.title}>
            <Text color="color.3" size="sm" ta="justify">
              {item.content}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

export default CMSTimeline;
