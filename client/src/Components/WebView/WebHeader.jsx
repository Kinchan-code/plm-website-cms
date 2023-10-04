import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Image,
  ActionIcon,
  createStyles,
  TextInput,
  Button,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import logo from "../../assets/PLMLogoText.png";
import Menus from "../Menus";

const useStyles = createStyles(() => ({
  HeaderTransparentTop: {
    background: "rgba(0, 0, 0, 0.5)",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
  },
  HeaderSolidTop: {
    backgroundColor: "#fff",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  },
  HeaderTransparentBot: {
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0))",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
  },
  HeaderSolidBot: {
    backgroundColor: "#f9f8f8",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
  },
}));

function WebHeader() {
  const { classes } = useStyles();
  const isScrollPastCondition = window.scrollY > 595;
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
      const show = window.scrollY > 630;
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY > 595;
  //     if (show) {
  //       setNavBackgroundBot("HeaderSolidBot");
  //     } else {
  //       setNavBackgroundBot("HeaderTransparentBot");
  //     }
  //   };
  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
              justifyContent: "space-between",
              color: "#fff",
              height: "100%",
              paddingRight: "3rem",
              cursor: "pointer",
            }}
            className={classes[navRefTop.current]}
          >
            <div style={{ display: "flex", marginLeft: "2rem" }}>
              <>
                <Image maw={300} p="0.5rem" src={logo} />
              </>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",

                  color: "#fff",
                  alignItems: "center",
                }}
              >
                <Menus
                  fsize="md"
                  color={
                    navBackgroundTop === "HeaderSolidTop" ? "#022f76" : "#fff"
                  }
                />
                <div style={{ padding: "1rem" }}>
                  {isSearchVisible ? null : (
                    <ActionIcon
                      variant="unstyled"
                      onClick={toggleSearch}
                      c={
                        navBackgroundTop === "HeaderSolidTop" ? "#000" : "#fff"
                      }
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
          {!isScrollPastCondition && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                cursor: "pointer",
                zIndex: "1",
                gap: "0rem",
              }}
              className={classes[navRefBot.current]}
            >
              <Button variant="unstyled">
                <Text fz="md" c="#fff" className="menu-text">
                  STUDENTS
                </Text>
              </Button>

              <Button variant="unstyled">
                <Text fz="md" c="#fff" className="menu-text">
                  FACULTY
                </Text>
              </Button>

              <Button variant="unstyled">
                <Text fz="md" c="#fff" className="menu-text">
                  ALUMNI
                </Text>
              </Button>

              <Button variant="unstyled">
                <Text fz="md" c="#fff" className="menu-text">
                  PARTNERS
                </Text>
              </Button>

              <Button variant="unstyled">
                <Text fz="md" c="#fff" className="menu-text">
                  COMMUNITY
                </Text>
              </Button>

              <Button variant="unstyled">
                <Text fz="md" c="#fff" className="menu-text">
                  PLM EMAIL LOGIN
                </Text>
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default WebHeader;
