import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Image,
  ActionIcon,
  createStyles,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import logo from "../../assets/PLMLogoText.png";
import Menus from "../Menus";

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

function WebHeader() {
  const { classes } = useStyles();
  const [isSearchVisible, setSearchVisible] = useState(false);
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
      const show = window.scrollY > 600;
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
      const show = window.scrollY > 600;
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
          height: "17vh",
          margin: "auto",
          zIndex: "999",
          boxShadow:
            navBackgroundTop === "HeaderSolidTop" ||
            navBackgroundBot === "HeaderSolidBot"
              ? "0 4px 4px rgba(0, 0, 0, 0.2)"
              : "none",
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
                alignItems: "center",
              }}
            >
              <Menus />
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
                Students
              </Text>
              <Text fz="lg" p="md">
                Faculty
              </Text>
              <Text fz="lg" p="md">
                Alumni
              </Text>
              <Text fz="lg" p="md">
                Partners
              </Text>
              <Text fz="lg" p="md">
                Community
              </Text>
              <Text fz="lg" p="md">
                PLM Email Login
              </Text>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default WebHeader;
