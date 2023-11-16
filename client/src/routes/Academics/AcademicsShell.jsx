import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Divider,
  Space,
  Grid,
  ScrollArea,
  Container,
  AppShell,
} from "@mantine/core";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";
import Nav from "../../Components/Nav";
import { links } from "./links";

function AcademicsShell() {
  const [selectedLink, setSelectedLink] = useState(null);
  const [selectedSublink, setSelectedSublink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSelectedSublink(null); // Reset selected sublink when changing main links
  };

  const handleSublinkClick = (sublink) => {
    setSelectedSublink(sublink); // Handle sublink selection
    console.log(selectedSublink);
  };

  const academicsTextRef = useRef(null);
  const [isSolidBackground, setIsSolidBackground] = useState(false);

  const handleScroll = () => {
    if (academicsTextRef.current) {
      const rect = academicsTextRef.current.getBoundingClientRect();

      setIsSolidBackground(
        rect.top <= window.innerHeight && rect.bottom >= 170
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Nav
        style={{
          backgroundColor: isSolidBackground ? "transparent" : "#fff",
          boxShadow: isSolidBackground
            ? "none"
            : "0 4px 4px rgba(0, 0, 0, 0.2)",
        }}
        backgroundColor
        color={isSolidBackground ? "color.0" : "color.9"}
        sColor={isSolidBackground ? "color.0" : "color.9"}
      />
      <div className="Header">
        <div
          style={{
            display: "flex",
            marginLeft: "3rem",
            marginTop: "10rem",
            position: "fixed",
            zIndex: 0,
          }}
        >
          <Divider size="md" color="#FFC60B" orientation="vertical" />
          <Space w="sm" />
          <Text c="#fff" fw="bold" fz="3rem">
            ACADEMICS
          </Text>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          flexDirection: "column",
          backgroundColor: "#fff",
          width: "100%",
          zIndex: "1",
        }}
      >
        <div
          ref={academicsTextRef}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center ",
            padding: "1rem",
          }}
        >
          <div style={{ display: "flex", padding: "1rem" }}>
            <Text fz="lg" ff="Open Sans">
              Home
            </Text>
            <Space w="sm" />
            <Text c="gray">⚬</Text>
            <Space w="sm" />
            <Text fz="lg" ff="Open Sans">
              Academics
            </Text>
            <Space w="sm" />
            <Text c="gray">⚬</Text>
            <Space w="sm" />
            <Text fz="lg" ff="Open Sans">
              {selectedLink} {/* Show the selected link here */}
            </Text>
            {selectedSublink && (
              <>
                <Space w="sm" />
                <Text c="gray">⚬</Text>
                <Space w="sm" />
                <Text fz="lg" ff="Open Sans">
                  {selectedSublink}
                </Text>
              </>
            )}
          </div>

          <Divider />
        </div>
        <div style={{ height: "150vh" }}>
          <Grid columns={24}>
            <Grid.Col span={6}>
              <Container>
                <Navigation
                  title={selectedLink}
                  links={links}
                  onLinkClick={handleLinkClick}
                  onSublinkClick={handleSublinkClick}
                  selectedSublink={selectedSublink}
                />
              </Container>
              {/* Place Navigation component in the first column */}
            </Grid.Col>
            <Grid.Col span={18}>
              <ScrollArea h={1000} type="never">
                <Container>
                  {/* Render content based on the selected link */}
                  {links.map((link) => {
                    if (link.label === selectedLink) {
                      if (selectedSublink) {
                        const sublinkComponent = link.subLinks.find(
                          (sublink) => sublink.label === selectedSublink
                        )?.component;

                        if (sublinkComponent) {
                          return React.createElement(sublinkComponent, {
                            selectedLink,
                            selectedSublink,
                          });
                        }
                      } else {
                        return React.createElement(link.component, {
                          selectedLink,
                          selectedSublink,
                        });
                      }
                    }
                    return null;
                  })}
                </Container>
              </ScrollArea>
            </Grid.Col>
          </Grid>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AcademicsShell;
