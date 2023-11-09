import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  Divider,
  Space,
  Grid,
  ScrollArea,
  Container,
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
        rect.top <= window.innerHeight && rect.bottom >= 110
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
  const findComponentByLabel = (label) =>
    links
      .flatMap((link) => link.subLinks || [])
      .find((sublink) => sublink.label === label)?.component;

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="Header">
        <Nav
          style={{
            backgroundColor: isSolidBackground ? "transparent" : "#fff",
            boxShadow: isSolidBackground
              ? "none"
              : "0 4px 4px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
          backgroundColor
          color={isSolidBackground ? "color.0" : "color.9"}
        />
        <div
          ref={academicsTextRef}
          style={{ display: "flex", marginLeft: "3rem", marginTop: "-2rem" }}
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
      <div>
        <Grid columns={24}>
          <Grid.Col span={6}>
            <Container>
              <Navigation
                title="ACADEMICS"
                links={links}
                onLinkClick={handleLinkClick}
                onSublinkClick={handleSublinkClick}
                selectedSublink={selectedSublink}
              />
            </Container>
            {/* Place Navigation component in the first column */}
          </Grid.Col>
          <Grid.Col span={18}>
            <ScrollArea h={700} type="never">
              <Container>
                {/* Render content based on the selected link */}
                {selectedLink === "Academic Overview" && (
                  <Overview selectedLink={selectedLink} />
                )}
                {selectedLink === "Colleges" && selectedSublink === null && (
                  <Colleges selectedLink={selectedLink} />
                )}

                {findComponentByLabel(selectedSublink) &&
                  React.createElement(findComponentByLabel(selectedSublink))}

                {selectedLink === "Academic Calendar" && (
                  <Calendar selectedLink={selectedLink} />
                )}
                {selectedLink === "Computer Registration System" && (
                  <CRS selectedLink={selectedLink} />
                )}
              </Container>
            </ScrollArea>
          </Grid.Col>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default AcademicsShell;
