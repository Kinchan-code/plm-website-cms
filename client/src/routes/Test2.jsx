import React from "react";
import { Accordion, Container, Text } from "@mantine/core";
import Test from "./Test";

function Test2() {
  return (
    <Container>
      <Accordion variant="default">
        <Accordion.Item value="Board Exam">
          <Accordion.Control>
            <Text fw="bold">Board Examination Performance</Text>
          </Accordion.Control>
          <Accordion.Panel style={{ display: "flex", flexDirection: "column" }}>
            <Text p="md">
              The college has repeatedly garnered a 100% or above the national
              passing rate in the Physical Therapist board exam, producing two
              to multiple topnotchers per exam.
            </Text>
            <Test />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
export default Test2;
