import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Image,
  ActionIcon,
  createStyles,
  TextInput,
  Button,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import logo from "../../assets/PLMLogoText.png";
import Menus from "../Menus";
import SearchBar from "../Searchbar";

// CSS Styles for the Header
const useStyles = createStyles(() => ({
  // Header is divided by two sides. Top and Bottom to put the links accordingly
  // CSS for Top side Header when Transparent
  HeaderTransparentTop: {
    background: "rgba(0, 0, 0, 0.5)",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
  },
  // CSS for Top side Header when Solid
  HeaderSolidTop: {
    backgroundColor: "#fff",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  },
  // CSS for Bottom side Header when Transparent
  HeaderTransparentBot: {
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0))",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
  },
  // CSS for Bottom side Header when Solid
  HeaderSolidBot: {
    backgroundColor: "#f9f8f8",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
  },
}));

function WebHeader() {
  const navigate = useNavigate();
  // To use the CSS above
  const { classes } = useStyles();
  // This is the trigger to when the header will become solid
  const isScrollPastCondition = window.scrollY > 595;
  const [navBackgroundTop, setNavBackgroundTop] = useState(
    "HeaderTransparentTop"
  );
  const [navBackgroundBot, setNavBackgroundBot] = useState(
    "HeaderTransparentBot"
  );

  const navRefTop = useRef(navBackgroundTop);
  navRefTop.current = navBackgroundTop;

  // This is the scroll condition on what pixel does the header will change it's background
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

  return (
    // This is the main Header
    <>
      <nav
        style={{
          position: "fixed",
          width: "100%",
          margin: "auto",
          zIndex: "999",
        }}
      >
        {/* This is the container of the header */}
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
                {/* Logo  */}
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
                {/* This is a custom links for the menus on the top header */}
                <Menus
                  fsize="md"
                  color={
                    navBackgroundTop === "HeaderSolidTop" ? "#022f76" : "#fff"
                  }
                />
                {/* Search icon */}
                <div style={{ padding: "1rem" }}>
                  <SearchBar
                    c={navBackgroundTop === "HeaderSolidTop" ? "#000" : "#fff"}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* This links will vanish when the scroll condition is triggered */}
          {!isScrollPastCondition && (
            // This are the links on the bottom header
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
              <Button
                variant="unstyled"
                onClick={() => {
                  navigate("/students");
                }}
              >
                <Text fz="md" c="#fff" className="menu-text">
                  STUDENTS
                </Text>
              </Button>

              <Button
                variant="unstyled"
                onClick={() => {
                  navigate("/faculty");
                }}
              >
                <Text fz="md" c="#fff" className="menu-text">
                  FACULTY
                </Text>
              </Button>

              <Button
                variant="unstyled"
                onClick={() => {
                  navigate("/alumni");
                }}
              >
                <Text fz="md" c="#fff" className="menu-text">
                  ALUMNI
                </Text>
              </Button>

              <Button
                variant="unstyled"
                onClick={() => {
                  navigate("/partners");
                }}
              >
                <Text fz="md" c="#fff" className="menu-text">
                  PARTNERS
                </Text>
              </Button>

              <Button
                variant="unstyled"
                onClick={() => {
                  navigate("/community");
                }}
              >
                <Text fz="md" c="#fff" className="menu-text">
                  COMMUNITY
                </Text>
              </Button>

              <Button
                variant="unstyled"
                onClick={() => {
                  navigate("/plm-email-login");
                }}
              >
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
