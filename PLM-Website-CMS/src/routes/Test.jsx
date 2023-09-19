import React from "react";
import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  createStyles,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";

const useStyles = createStyles(() => ({
  footer: {
    marginTop: "120px", // Use a string with 'px'
    paddingTop: "calc(var(--mantine-spacing-xl) * 2)",
    paddingBottom: "calc(var(--mantine-spacing-xl) * 2)",
    backgroundColor:
      "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
    borderTop:
      "1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5))",
  },

  logo: {
    maxWidth: "200px", // Use a string with 'px'

    "@media (max-width: $mantine-breakpoint-sm)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: "5px", // Use a string with 'px'

    "@media (max-width: $mantine-breakpoint-sm)": {
      marginTop: "var(--mantine-spacing-xs)",
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    "@media (max-width: $mantine-breakpoint-sm)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    "@media (max-width: $mantine-breakpoint-sm)": {
      display: "none",
    },
  },

  wrapper: {
    width: "160px", // Use a string with 'px'
  },

  link: {
    display: "block",
    color:
      "light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-1))",
    fontSize: "var(--mantine-font-size-sm)",
    paddingTop: "3px", // Use a string with 'px'
    paddingBottom: "3px", // Use a string with 'px'

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: "var(--mantine-font-size-lg)",
    fontWeight: "700",
    fontFamily: "Greycliff CF, var(--mantine-font-family)",
    marginBottom: "calc(var(--mantine-spacing-xs) / 2)",
    color: "light-dark(var(--mantine-color-black), var(--mantine-color-white))",
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "var(--mantine-spacing-xl)",
    paddingTop: "var(--mantine-spacing-xl)",
    paddingBottom: "var(--mantine-spacing-xl)",
    borderTop:
      "1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4))",

    "@media (max-width: $mantine-breakpoint-sm)": {
      flexDirection: "column",
    },
  },

  social: {
    "@media (max-width: $mantine-breakpoint-sm)": {
      marginTop: "var(--mantine-spacing-xs)",
    },
  },
}));

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

function Test() {
  const { classes } = createStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <MantineLogo size={30} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default Test;
// import React from "react";

// function Test() {
//   return <div></div>;
// }

// export default Test;
