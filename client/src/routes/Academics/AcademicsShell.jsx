import React, { useState } from "react";
import { Text, Image, Divider, Space, Grid } from "@mantine/core";
import Menus from "../../Components/Menus";
import logo from "../../assets/PLMLogotext.png";
import Overview from "./Overview";
import Calendar from "./Calendar";
import Colleges from "./Colleges";
import CRS from "./CRS";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";

const links = [
  {
    label: "Academic Overview",
    link: "/academics/academic-overview",
    order: 1,
  },
  {
    label: "Colleges",
    link: "/academics/colleges",
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
  { label: "Academic Calendar", link: "/academics/calendar", order: 1 },
  { label: "Computer Registration System", link: "/academics/crs", order: 1 },
];

function AcademicsShell() {
  const [selectedLink, setSelectedLink] = useState("Academic Overview");
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <>
      <div className="Header">
        <nav
          style={{
            width: "100%",
            margin: "auto",
            height: "30vh",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: "2rem",
              marginRight: "2rem",
            }}
          >
            <Image
              maw={300}
              p="0.5rem"
              src={logo}
              style={{ padding: "0.5rem" }}
            />
            <Menus color="#fff" fsize="md" />
          </div>
        </nav>
        <div
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
        </div>

        <Divider />
      </div>
      <div>
        <Grid columns={24}>
          <Grid.Col span={6}>
            <Navigation links={links} onLinkClick={handleLinkClick} />{" "}
            {/* Place Navigation component in the first column */}
          </Grid.Col>
          <Grid.Col span={18}>
            {/* Render content based on the selected link */}
            {selectedLink === "Academic Overview" && <Overview />}
            {selectedLink === "Colleges" && <Colleges />}
            {selectedLink === "Academic Calendar" && <Calendar />}
            {selectedLink === "Computer Registration System" && <CRS />}
          </Grid.Col>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default AcademicsShell;
