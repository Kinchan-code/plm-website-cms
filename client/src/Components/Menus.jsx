import React, { useState, useEffect } from "react";
import { Menu, Button, Text, Divider } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

function Menus({ color, fsize }) {
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [academicsMenuOpen, setAcademicsMenuOpen] = useState(false);
  const [admissionsMenuOpen, setAdmissionsMenuOpen] = useState(false);
  const [researchMenuOpen, setResearchMenuOpen] = useState(false);
  const [newsMenuOpen, setNewsMenuOpen] = useState(false);

  const toggleAboutMenu = () => setAboutMenuOpen(!aboutMenuOpen);
  const toggleAcademicsMenu = () => setAcademicsMenuOpen(!academicsMenuOpen);
  const toggleAdmissionsMenu = () => setAdmissionsMenuOpen(!admissionsMenuOpen);
  const toggleResearchMenu = () => setResearchMenuOpen(!researchMenuOpen);
  const toggleNewsMenu = () => setNewsMenuOpen(!newsMenuOpen);
  useEffect(() => {
    const closeMenus = () => {
      setAboutMenuOpen(false);
      setAcademicsMenuOpen(false);
      setAdmissionsMenuOpen(false);
      setResearchMenuOpen(false);
      setNewsMenuOpen(false);
    };

    document.addEventListener("click", closeMenus);

    return () => {
      document.removeEventListener("click", closeMenus);
    };
  }, []);
  return (
    <div>
      <Menu shadow="md" width={250}>
        <Menu.Target>
          <Button
            variant="unstyled"
            c={color}
            rightIcon={
              aboutMenuOpen ? (
                <IconChevronUp size="1rem" />
              ) : (
                <IconChevronDown size="1rem" />
              )
            }
            onClick={(e) => {
              e.stopPropagation();
              toggleAboutMenu();
            }}
          >
            <Text ff="lato" fz={fsize}>
              ABOUT
            </Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <Text> University Profile </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Administration </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Pride Hall </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Outcome-Based Education (OBE) </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Contact </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            variant="unstyled"
            c={color}
            rightIcon={
              academicsMenuOpen ? (
                <IconChevronUp size="1rem" />
              ) : (
                <IconChevronDown size="1rem" />
              )
            }
            onClick={(e) => {
              e.stopPropagation();
              toggleAcademicsMenu();
            }}
          >
            <Text ff="lato" fz={fsize}>
              ACADEMICS
            </Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <Text> Colleges </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Academic Calendar </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Computerized Registration System </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            variant="unstyled"
            c={color}
            rightIcon={
              admissionsMenuOpen ? (
                <IconChevronUp size="1rem" />
              ) : (
                <IconChevronDown size="1rem" />
              )
            }
            onClick={(e) => {
              e.stopPropagation();
              toggleAdmissionsMenu();
            }}
          >
            <Text ff="lato" fz={fsize}>
              ADMISSIONS
            </Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <Text> PLM Admission Test (PLMAT) </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Undergraduate Programs </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Scholarship and Financial Aid </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Medical College Admission Test </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> College of Law Admission Test (CLAT) </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            variant="unstyled"
            c={color}
            rightIcon={
              researchMenuOpen ? (
                <IconChevronUp size="1rem" />
              ) : (
                <IconChevronDown size="1rem" />
              )
            }
            onClick={(e) => {
              e.stopPropagation();
              toggleResearchMenu();
            }}
          >
            <Text ff="lato" fz={fsize}>
              RESEARCH
            </Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <Text> Theses and Dissertation </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            variant="unstyled"
            c={color}
            rightIcon={
              newsMenuOpen ? (
                <IconChevronUp size="1rem" />
              ) : (
                <IconChevronDown size="1rem" />
              )
            }
            onClick={(e) => {
              e.stopPropagation();
              toggleNewsMenu();
            }}
          >
            <Text ff="lato" fz={fsize}>
              NEWS
            </Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <Text> Press Release </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Gallery </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Special Reports </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> News Letter </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Announcements </Text>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Text> Message from the University Presidents </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu shadow="md">
        <Menu.Target>
          <Button variant="unstyled" c={color}>
            <Text ff="lato" fz={fsize}>
              DOWNLOADS
            </Text>
          </Button>
        </Menu.Target>
      </Menu>
    </div>
  );
}

export default Menus;
