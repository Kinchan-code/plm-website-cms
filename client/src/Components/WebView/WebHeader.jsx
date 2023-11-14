import React from "react";
import { Text, Image, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/PLMLogoText.png";
import Menus from "../Menus";
import SearchBar from "../Searchbar";

function WebHeader({
  topStyle,
  botStyle,
  menuColor,
  searchColor,
  isHeaderBotVisible,
}) {
  const navigate = useNavigate();

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
            className={topStyle}
            // topStyle={classes[navRefTop.current]}
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
                  color={menuColor}
                  // navBackgroundTop === "HeaderSolidTop" ? "#022f76" : "#fff"
                />
                {/* Search icon */}
                <div style={{ paddingLeft: "1rem" }}>
                  <SearchBar
                    c={searchColor}
                    //  navBackgroundTop === "HeaderSolidTop" ? "#000" : "#fff"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* This links will vanish when the scroll condition is triggered */}
          {isHeaderBotVisible && (
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
              className={botStyle}
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
