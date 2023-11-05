import cx from "clsx";
import { useState } from "react";
import { Box, Text, Group, Divider, createStyles } from "@mantine/core";
import { IconListSearch } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  root: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    display: "block",
    textDecoration: " none",
    color: "#000",
    lineHeight: "2.375rem",
    fontSize: "1rem",
    height: "2.375rem",
    borderTopRightRadius: "2rem",
    borderBottomRightRadius: "2rem",
    borderLeft: "0.125rem solid gray",

    "@mixin hover": {
      backgroundColor: "#fff",
    },
  },
  linkActive: {
    fontWeight: "500px",
    color: "#d5a106",
  },
  indicator: {
    transition: "transform 150ms ease",
    border: "0.125rem solid #0087ca",
    backgroundColor: "#fff",
    height: ".625rem",
    width: ".625rem",
    borderRadius: ".625rem",
    position: "absolute",
    left: "calc((.625rem) / -2 + 0.063rem)",
  },
}));

const links = [
  { label: "Academic Overview", link: "#usage", order: 1 },
  {
    label: "Colleges",
    link: "#position",
    order: 1,
    subLinks: [
      { label: "Architecture and Urban Planning", link: "#sublink1" },
      { label: "PLM Business School", link: "#sublink2" },
      { label: "Education", link: "#sublink2" },
      { label: "Engineering", link: "#sublink1" },
      { label: "Humanities, Arts and Social Sciences", link: "#sublink2" },
      { label: "College of Nursing", link: "#sublink2" },
      { label: "Physical Therapy", link: "#sublink1" },
      { label: "College of Science", link: "#sublink2" },
      { label: "College of Law", link: "#sublink2" },
      { label: "Graduate School of Law", link: "#sublink1" },
      { label: "College of Medicine", link: "#sublink2" },
      { label: "School of Government", link: "#sublink2" },
      { label: "School of Public Health", link: "#sublink2" },
    ],
  },
  { label: "Academic Calendar", link: "#overlays", order: 1 },
  { label: "Computer Registration System", link: "#focus", order: 1 },
];

function Test() {
  const { classes } = useStyles();
  const [active, setActive] = useState(2);
  const [activeSublink, setActiveSublink] = useState(null);

  const items = links.map((item, index) => (
    <div key={item.label}>
      <Box
        component="a"
        href={item.link}
        onClick={(event) => {
          event.preventDefault();
          setActive(index);
          setActiveSublink(null);
        }}
        key={item.label}
        className={cx(classes.link, { [classes.linkActive]: active === index })}
        style={{ paddingLeft: `calc(${item.order} * 2rem` }}
      >
        {item.label}
      </Box>
      <div
        className={cx(classes.subLinksContainer, {
          [classes.subLinksCollapsed]: active !== index,
        })}
      >
        {active === index &&
          item.subLinks &&
          item.subLinks.length > 0 &&
          item.subLinks.map((subLink, subIndex) => (
            <Box
              component="a"
              href={subLink.link}
              key={subLink.label}
              // className={cx(classes.link, classes.subLink)}
              className={cx(classes.link, classes.subLink, {
                [classes.linkActive]: activeSublink === subIndex,
              })}
              onClick={(event) => {
                event.preventDefault();
                setActiveSublink(subIndex);
              }}
              style={{ paddingLeft: `calc(${item.order} * 4rem` }}
            >
              {subLink.label}
            </Box>
          ))}
      </div>
    </div>
  ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className={classes.root}>
        <div style={{ marginBottom: "0.5rem" }}>
          <Text fz="xl" fw="bold" mb="sm" ff="Open Sans, sans serif">
            ACADEMICS
          </Text>
          <Divider size="lg" />
        </div>
        <div className={classes.links}>
          <div
            className={classes.indicator}
            style={{
              transform: `translateY(calc(${active} * 2.375rem + 0.875rem`,
            }}
          />
          {items}
        </div>
      </div>
    </div>
  );
}
export default Test;
