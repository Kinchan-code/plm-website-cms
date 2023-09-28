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
    background: "rgba(0, 0, 0, 0.5)",
    "& .menu-text:hover": {
      color: "#ffc909",
      transition: "0.3s ease-in-out",
    },
  },
  HeaderSolidTop: {
    backgroundColor: "#a31920",
    "& .menu-text:hover": {
      color: "#ffc909",
      transition: "0.3s ease-in-out",
    },
    zIndex: 1,
  },
  HeaderTransparentBot: {
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0))",
    "& .menu-text:hover": {
      backgroundColor: "gray",
      color: "#ffc909",
      transition: "0.3s ease-in-out",
    },
  },
  HeaderSolidBot: {
    backgroundColor: "#fff",
    "& .menu-text:hover": {
      color: "#ffc909",
      transition: "0.3s ease-in-out",
    },
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)",
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
      const show = window.scrollY > 595;
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
      const show = window.scrollY > 595;
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
          margin: "auto",
          zIndex: "999",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              color: "#fff",
              height: "100%",
              paddingRight: "3rem",
              cursor: "pointer",
            }}
            className={classes[navRefTop.current]}
          >
            <Text fz="sm" p="sm" className="menu-text">
              STUDENTS
            </Text>
            <Text fz="sm" p="sm" className="menu-text">
              FACULTY
            </Text>
            <Text fz="sm" p="sm" className="menu-text">
              ALUMNI
            </Text>
            <Text fz="sm" p="sm" className="menu-text">
              PARTNERS
            </Text>
            <Text fz="sm" p="sm" className="menu-text">
              COMMUNITY
            </Text>
            <Text fz="sm" p="sm" className="menu-text">
              PLM EMAIL LOGIN
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              paddingRight: "2rem",
              paddingLeft: "2rem",
              paddingTop: ".5rem",
              paddingBottom: ".5rem",
            }}
            className={classes[navRefBot.current]}
          >
            <div style={{ display: "flex", marginLeft: "1rem" }}>
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
              <Menus
                fsize="md"
                color={navBackgroundTop === "HeaderSolidTop" ? "#000" : "#fff"}
              />
              <div style={{ padding: "1rem" }}>
                {isSearchVisible ? null : (
                  <ActionIcon
                    variant="unstyled"
                    onClick={toggleSearch}
                    c={navBackgroundTop === "HeaderSolidTop" ? "#000" : "#fff"}
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
        </div>
      </nav>
    </>
  );
}

export default WebHeader;
