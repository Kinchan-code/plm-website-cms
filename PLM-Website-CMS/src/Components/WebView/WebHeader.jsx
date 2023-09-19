import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Drawer,
  Burger,
  Group,
  Divider,
  Image,
  ActionIcon,
  createStyles,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import logo from "./images/PLMLogoText.png";
import Footer from "../Footer";

const useStyles = createStyles(() => ({
  HeaderTransparent: {
    backgroundColor: "rgba(0, 0, 0, 0.005)",
  },
  HeaderSolid: {
    backgroundColor: "#fff",
    zIndex: 1,
  },
}));

function WebHeader() {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const [navBackground, setNavBackground] = useState("HeaderTransparent");

  const navRef = useRef(navBackground);
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      if (show) {
        setNavBackground("HeaderSolid");
      } else {
        setNavBackground("HeaderTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSearchVisible &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchVisible]);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const closeSearch = () => {
    setSearchVisible(false);
  };

  const searchInputRef = useRef(null);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          width: "100%",
          height: "10vh",
          margin: "auto",
          padding: "3rem",
        }}
        className={classes[navRef.current]}
      >
        <div
          style={{
            display: "flex",
            margin: "auto",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div style={{ display: "flex" }}>
            <>
              <Group position="center" style={{ marginRight: "1rem" }}>
                <Burger
                  onClick={open}
                  opened={opened}
                  aria-label={label}
                  color={
                    navBackground === "HeaderTransparent" ? "#fff" : "#000"
                  }
                />
              </Group>
              <Image maw={350} src={logo} />
            </>
          </div>

          <Drawer
            size="20%"
            position="left"
            title={<Text>Menu</Text>}
            opened={opened}
            onClose={close}
            overlayProps={{ opacity: 0.5, blur: 5 }}
          >
            <Divider />

            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <Text>Hello World</Text>
                <Text>Edi wow</Text>
              </div>
              <div style={{ position: "fixed", bottom: 0, width: "90%" }}>
                <Footer />
              </div>
            </>
          </Drawer>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              color: navBackground === "HeaderSolid" ? "#000" : "#fff",
            }}
          >
            <Text p="md">About</Text>
            <Text p="md">Academics</Text>
            <Text p="md">Admissions</Text>
            <Text p="md">Research</Text>
            <Text p="md">News</Text>
            <Text p="md">Downloads</Text>
            <div style={{ padding: "1rem" }}>
              {isSearchVisible ? null : (
                <ActionIcon
                  variant="unstyled"
                  onClick={toggleSearch}
                  c={navBackground === "HeaderTransparent" ? "#fff" : "#000"}
                >
                  <IconSearch size="1.125rem" />
                </ActionIcon>
              )}
            </div>

            {isSearchVisible ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextInput
                  p="sm"
                  c="black"
                  radius="lg"
                  placeholder="Search"
                  style={{
                    marginLeft: "-2rem",
                    flexDirection: "row-reverse",
                  }}
                  ref={searchInputRef}
                />
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}

export default WebHeader;
