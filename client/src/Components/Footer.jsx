import React from "react";
import { Text, ActionIcon, Group, Image, Divider, Box } from "@mantine/core";
import {
  IconBrandTwitterFilled,
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconMailFilled,
} from "@tabler/icons-react";
import logo from "../assets/PLMLogoText1.png";

const data = [
  {
    title: "Quick Links",
    links: [
      { label: "Contact Us", link: "#" },
      { label: "Scholarships", link: "#" },
      { label: "Academic Calendar", link: "#" },
      { label: "University Map", link: "#" },
    ],
  },
  {
    title: "‎ ",
    links: [
      { label: "Archive", link: "#" },
      { label: "Careers", link: "#" },
      { label: "Procurement", link: "#" },
    ],
  },
  {
    title: "News",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

const footerLinks = [
  { label: "Site Guide", link: "#" },
  { label: "Privacy Policy", link: "#" },
  { label: "Terms of Use", link: "#" },
  { label: "Citizen's Charter", link: "#" },
];

function Footer() {
  const footerLinkElements = footerLinks.map((link, index) => (
    <Text
      as="a"
      c="dimmed"
      key={index}
      className="footlinks"
      style={{
        display: "block",
        color: "#fff",
        fontSize: "1rem",
        padding: "0.5rem",
        paddingTop: "0.19rem",
        paddingBottom: "0.19rem",
        cursor: "pointer",
      }}
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        as="a"
        key={index}
        className="link"
        style={{
          display: "block",
          color: "#fff",
          fontSize: "1rem",
          paddingTop: "0.19rem",
          paddingBottom: "0.19rem",
          cursor: "pointer",
        }}
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div style={{ width: "17rem", marginBottom: "1.5rem" }} key={group.title}>
        <Text
          style={{
            fontSize: "1.3rem",
            fontWeight: "1000",
            fontFamily: "OpenSans",
            marginBottom: "calc(var(--mantine-spacing-xs) / 2)",
            color: "#fff",
          }}
        >
          {group.title}
        </Text>
        {links}
      </div>
    );
  });

  return (
    <div className="footerContainer">
      <footer
        style={{
          marginTop: "7.5",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor:
            "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
          borderTop:
            "rem(1px) solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5))",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <Image maw={350} src={logo} p="md" />
        </div>

        <div style={{ marginLeft: "5rem", marginRight: "5rem" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",

              "@media (maxWidth: $mantine-breakpoint-sm)": {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <div
              style={{
                maxWidth: "12.5rem",
                "@media (maxWidth: $mantine-breakpoint-sm)": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}
            >
              <Text
                size="lg"
                fw="bold"
                ff="Open Sans"
                c="#fff"
                style={{ marginBottom: "1rem", marginTop: "0.5rem" }}
              >
                Get in Touch
              </Text>
              <Text
                size="xs"
                c="#fff"
                style={{
                  marginTop: "0.313",

                  "@media (maxWidth: $mantine-breakpoint-sm)": {
                    marginTop: "var(--mantine-spacing-xs)",
                    textAlign: "center",
                  },
                }}
              >
                Gen. Luna corner Muralla St., Intramuros Manila, Philippines
                1002
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",

                "@media (maxWidth: $mantine-breakpoint-sm)": {
                  display: "none",
                },
              }}
            >
              {groups}
            </div>
          </Box>
          <Box>
            <Divider size="md" color="#FFC60B" />
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // marginTop: "var(--mantine-spacing-xl)",
              marginTop: "0.5rem",
              // paddingTop: "var(--mantine-spacing-xl)",
              paddingTop: "0.5rem",
              // paddingBottom: "var(--mantine-spacing-xl)",
              paddingBottom: "0.5rem",
              borderTop:
                "rem(1px) solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4))",

              "@media (max-width: $mantine-breakpoint-sm)": {
                flexDirection: "column",
              },
            }}
          >
            <div>
              <Text c="#fff" size="sm">
                © 1967 - 2023 Pamantasan ng Lungsod
              </Text>
              <Text c="#fff" size="sm">
                ng Maynila. All Rights Reserved.
              </Text>
            </div>

            <div style={{ display: "flex" }}>{footerLinkElements}</div>

            <Group
              gap={0}
              style={{
                "@media (max-width: $mantine-breakpoint-sm)": {
                  marginTop: "var(--mantine-spacing-xs)",
                },
              }}
              justify="flex-end"
              wrap="nowrap"
            >
              <ActionIcon size="sm" color="#fff" variant="light">
                <IconBrandFacebookFilled />
              </ActionIcon>
              <ActionIcon size="sm" color="#fff" variant="light">
                <IconBrandTwitterFilled />
              </ActionIcon>
              <ActionIcon size="sm" color="#fff" variant="light">
                <IconBrandLinkedin />
              </ActionIcon>
              <ActionIcon size="sm" color="#fff" variant="light">
                <IconMailFilled />
              </ActionIcon>
            </Group>
          </Box>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
