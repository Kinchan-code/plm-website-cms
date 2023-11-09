import React from "react";
import { Accordion, Text, List } from "@mantine/core";

function CMSAccordion({ items }) {
  return (
    <Accordion variant="separated" radius="md">
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>
            <Text fw="bold">{item.title}</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <List p="md">
              {Array.isArray(item.content) ? (
                item.content.map((content, index) => (
                  <List.Item key={index}>
                    <Text>{content}</Text>
                  </List.Item>
                ))
              ) : (
                <List.Item>
                  <Text ta="justify">{item.content}</Text>
                </List.Item>
              )}
            </List>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default CMSAccordion;
