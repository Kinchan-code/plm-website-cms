import { Card, Text, Blockquote } from "@mantine/core";

function Test() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Text fz="xl" fw="bold" p="md">
          VISION
        </Text>
      </Card.Section>

      <Blockquote>
        <Text>
          It will become a partner of choice as an active provider of competent
          industry players in today's built-environment market.
        </Text>
      </Blockquote>
    </Card>
  );
}

export default Test;
