import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Image,
  ActionIcon,
  createStyles,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import logo from "../assets/PLMLogoText.png";

const useStyles = createStyles(() => ({
  HeaderTransparentTop: {
    backgroundColorTop: "rgba(0, 0, 0, 0.005)",
  },
  HeaderSolidTop: {
    backgroundColor: "#a31920",
    zIndex: 1,
  },
  HeaderTransparentBot: {
    backgroundColor: "rgba(0, 0, 0, 0.005)",
  },
  HeaderSolidBot: {
    backgroundColor: "#fff",
    zIndex: 1,
  },
}));

function Test() {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const [navBackgroundTop, setNavBackgroundTop] = useState(
    "HeaderTransparentTop"
  );
  const [navBackgroundBot, setNavBackgroundBot] = useState(
    "HeaderTransparentBot"
  );

  const navRefTop = useRef(navBackgroundTop);
  navRefTop.current = navBackgroundTop;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      if (show) {
        setNavBackgroundTop("HeaderSolidTop");
      } else {
        setNavBackgroundTop("HeaderTransparentTop");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navRefBot = useRef(navBackgroundBot);
  navRefBot.current = navBackgroundBot;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      if (show) {
        setNavBackgroundBot("HeaderSolidBot");
      } else {
        setNavBackgroundBot("HeaderTransparentBot");
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
          height: "25vh",
          margin: "auto",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              paddingRight: "2rem",
              paddingLeft: "2rem",
            }}
            className={classes[navRefTop.current]}
          >
            <div style={{ display: "flex" }}>
              <>
                <Image maw={250} src={logo} />
              </>
            </div>

            <div
              style={{
                display: "flex",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              <Text fz="md" p="md">
                About
              </Text>
              <Text fz="md" p="md">
                Academics
              </Text>
              <Text fz="md" p="md">
                Admissions
              </Text>
              <Text fz="md" p="md">
                Research
              </Text>
              <Text fz="md" p="md">
                News
              </Text>
              <Text fz="md" p="md">
                Downloads
              </Text>
              <div style={{ padding: "1rem" }}>
                {isSearchVisible ? null : (
                  <ActionIcon
                    variant="unstyled"
                    onClick={toggleSearch}
                    c="#fff"
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
                      borderBlock: "black",
                    }}
                    ref={searchInputRef}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              height: "100%",
            }}
            className={classes[navRefBot.current]}
          >
            <div
              style={{
                display: "flex",
                cursor: "pointer",
                color: navBackgroundBot === "HeaderSolidBot" ? "#000" : "#fff",
                transition: "0.3s ease-in-out",
              }}
            >
              <Text fz="lg" p="md">
                About
              </Text>
              <Text fz="lg" p="md">
                Academics
              </Text>
              <Text fz="lg" p="md">
                Admissions
              </Text>
              <Text fz="lg" p="md">
                Research
              </Text>
              <Text fz="lg" p="md">
                News
              </Text>
              <Text fz="lg" p="md">
                Downloads
              </Text>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="main"
        style={{
          display: "flex",
          minHeight: "100vh",
        }}
      ></div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "theme.white",
          padding: "1rem",
        }}
      >
        <>
          {/* <Slideshow /> */}
          <Text fz="lg" style={{ fontFamily: "Lato, sans-serif" }}></Text>
        </>
      </div>
    </>
  );
}

export default Test;
