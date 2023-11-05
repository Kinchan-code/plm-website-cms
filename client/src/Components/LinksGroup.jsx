import React, { useState } from "react";
import {
  Text,
  Group,
  Box,
  Collapse,
  ThemeIcon,
  rem,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component="a"
      className="link"
      style={{
        fontWeight: 500,
        display: "block",
        textDecoration: "none",
        padding: "0.5rem",
        paddingLeft: "1rem",
        marginLeft: "2rem",
        fontSize: "1rem",
        color: "#525252",
        borderLeft: "1px solid black",
      }}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className="control"
        styles={{ transition: "transform 200ms ease" }}
        style={{
          fontWeight: 500,
          display: "block",
          width: "100%",
          padding: "0.5rem",
          color: "var(--mantineColorText)",
          fontSize: "1rem",
        }}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            {/* <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon> */}
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className="chevron"
              stroke={1.5}
              style={{
                width: "1rem",
                height: "1rem",
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
function NavbarLinksGroup() {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  );
}

export default NavbarLinksGroup;
