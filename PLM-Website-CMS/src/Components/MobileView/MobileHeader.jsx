import React from "react";
import { Text, Header, Drawer, Button, Group, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";

function MobileHeader() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Header height={{ base: 50, md: 70 }} p="md">
        <div
          style={{
            display: "flex",
            margin: "auto",
            alignItems: "center",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text>Mobile header</Text>
          <div>
            {" "}
            <Drawer
              position="top"
              opened={opened}
              onClose={close}
              title="Authentication"
              overlayProps={{ opacity: 0.5, blur: 4 }}
            >
              {/* Drawer content */}
            </Drawer>
            <Group position="center">
              <ActionIcon onClick={open}>
                <IconMenu2 />
              </ActionIcon>
            </Group>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default MobileHeader;
