import React, { useState, useEffect } from "react";
import { Text, Image, Divider, Space, Grid } from "@mantine/core";
import Menus from "../../Components/Menus";
import logo from "../../assets/PLMLogotext.png";
import Overview from "./Overview";
import Calendar from "./Calendar";
import CRS from "./CRS";
import CAUP from "./CollegesLinks/CAUP";
import PLMBS from "./CollegesLinks/PLMBS";
import CED from "./CollegesLinks/CED";
import COE from "./CollegesLinks/COE";
import CHASS from "./CollegesLinks/CHASS";
import CN from "./CollegesLinks/CN";
import PT from "./CollegesLinks/PT";
import CS from "./CollegesLinks/CS";
import CL from "./CollegesLinks/CL";
import GSL from "./CollegesLinks/GSL";
import CM from "./CollegesLinks/CM";
import SG from "./CollegesLinks/SG";
import PH from "./CollegesLinks/PH";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";
import { useParams } from "react-router-dom";

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
      {
        label: "Architecture and Urban Planning",
        link: "/academics/colleges/caup",
      },
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

function determineSelectedLink(sublink, parentLinkLabel) {
  // Define a default selected link
  let defaultSelectedLink = "Academic Overview";

  if (sublink) {
    // Check if the sublink parameter matches any sublink labels
    for (const link of links) {
      if (link.subLinks) {
        for (const subLink of link.subLinks) {
          if (subLink.link === `/academics/colleges/${sublink}`) {
            defaultSelectedLink = link.label;
            break;
          }
        }
      }
    }
  } else if (parentLinkLabel) {
    // If there is no sublink parameter but a parent link label is provided,
    // set the default link to the label of the first sublink of the parent link
    const parentLink = links.find((link) => link.label === parentLinkLabel);
    if (parentLink && parentLink.subLinks && parentLink.subLinks.length > 0) {
      defaultSelectedLink = parentLink.subLinks[0].label;
    }
  }

  return defaultSelectedLink;
}

function AcademicsShell() {
  const { sublink } = useParams();
  const [selectedLink, setSelectedLink] = useState(null);
  const [selectedSublink, setSelectedSublink] = useState(null);

  const defaultSelectedLink = determineSelectedLink(sublink);
  // Set the default selected link when the component mounts
  const defaultSelectedSublink =
    defaultSelectedLink === "Colleges"
      ? "Architecture and Urban Planning"
      : null;
  useEffect(() => {
    setSelectedLink(defaultSelectedLink);

    if (defaultSelectedLink === "Colleges") {
      // Check if the selected link is "Colleges" and if it has sublinks
      const collegesLink = links.find((link) => link.label === "Colleges");
      if (
        collegesLink &&
        collegesLink.subLinks &&
        collegesLink.subLinks.length > 0
      ) {
        setSelectedSublink(collegesLink.subLinks[0].label);
      }
    }
  }, [defaultSelectedLink]);

  const handleLinkClick = (link) => {
    setSelectedLink(link);

    if (link === "Colleges") {
      // Check if the selected link is "Colleges" and if it has sublinks
      const collegesLink = links.find((link) => link.label === "Colleges");
      if (
        collegesLink &&
        collegesLink.subLinks &&
        collegesLink.subLinks.length > 0
      ) {
        setSelectedSublink(collegesLink.subLinks[0].label);
      }
    } else {
      setSelectedSublink(null);
    }
  };

  const handleSublinkClick = (sublinkLabel) => {
    setSelectedSublink(sublinkLabel);
  };

  const sublinkComponents = {
    "Architecture and Urban Planning": <CAUP />,
    "PLM Business School": <PLMBS />,
    Education: <CED />,
    Engineering: <COE />,
    "Humanities, Arts and Social Sciences": <CHASS />,
    "College of Nursing": <CN />,
    "Physical Therapy": <PT />,
    "College of Science": <CS />,
    "College of Law": <CL />,
    "Graduate School of Law": <GSL />,
    "College of Medicine": <CM />,
    "School of Government": <SG />,
    "School of Public Health": <PH />,
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
            <Navigation
              title="ACADEMICS"
              links={links}
              onLinkClick={handleLinkClick}
              onSublinkClick={handleSublinkClick}
              selectedSublink={selectedSublink}
            />{" "}
            {/* Place Navigation component in the first column */}
          </Grid.Col>
          <Grid.Col span={18}>
            {/* Render content based on the selected link */}
            {selectedLink === "Academic Overview" && <Overview />}
            {sublinkComponents[selectedSublink]}
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
