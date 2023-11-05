import React from "react";
import { Text, ActionIcon, Group, Image, Divider, Box } from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconMailFilled,
  IconBrandX,
} from "@tabler/icons-react";
import logo from "../assets/PLMLogoText1.png";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Quick Links",
    links: [
      { label: "Contact Us", link: "/contact-us" },
      {
        label: "Scholarships",
        link: "/admissions/scholarship-and-financial-aid",
      },
      { label: "Academic Calendar", link: "/academics/calendar" },
      { label: "University Map", link: "/university-map" },
    ],
  },
  {
    title: "‎ ",
    links: [
      { label: "Archive", link: "/archive" },
      { label: "Careers", link: "/careers" },
      { label: "Procurement", link: "/procurement" },
    ],
  },
  {
    title: "News",
    links: [
      { label: "Press Releases", link: "/news/press-release" },
      { label: "Special Reports", link: "/news/special-reports" },
      { label: "Announcements", link: "/news/announcements" },
      { label: "Gallery", link: "/news/gallery" },
    ],
  },
];

const footerLinks = [
  { label: "Site Guide", link: "/site-guide" },
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "Terms of Use", link: "terms-of-use" },
  { label: "Citizen's Charter", link: "citizens-charter" },
];

function Footer() {
  const navigate = useNavigate();
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
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
      }}
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
        onClick={(event) => {
          event.preventDefault();
          navigate(link.link);
        }}
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

              "@media (maxWidth: $mantineBreakpointSm)": {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <div
              style={{
                maxWidth: "12.5rem",
                "@media (maxWidth: $mantineBreakpointSm)": {
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

                  "@media (maxWidth: $mantineBreakpointSm)": {
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

                "@media (maxWidth: $mantineBreakpointSm)": {
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

              "@media (maxWidth: $mantineBreakpointSm)": {
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
                "@media (maxWidth: $mantineBreakpointSm)": {
                  marginTop: "var(--mantine-spacing-xs)",
                },
              }}
              justify="flex-end"
              wrap="nowrap"
            >
              <ActionIcon
                size="sm"
                onClick={() => {
                  window.open("https://www.facebook.com/PLM.Haribon", "_blank");
                }}
              >
                <IconBrandFacebookFilled />
              </ActionIcon>
              <ActionIcon
                size="sm"
                onClick={() => {
                  window.open("https://twitter.com/PLM_Manila", "_blank");
                }}
              >
                <IconBrandX />
              </ActionIcon>
              <ActionIcon
                size="sm"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A15097268&keywords=pamantasan%20ng%20lungsod%20ng%20maynila&origin=RICH_QUERY_SUGGESTION&position=0&searchId=93b8881c-843a-49c2-95b8-ea6b6f58f9ae&sid=n%3Am&spellCorrectionEnabled=false",
                    "_blank"
                  );
                }}
              >
                <IconBrandLinkedin />
              </ActionIcon>
              <ActionIcon
                size="sm"
                onClick={() => {
                  window.open("mailto:info@plm.edu.ph", "_blank");
                }}
              >
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
