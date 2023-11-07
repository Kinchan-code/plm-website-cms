import React, { useState, useEffect } from "react";
import { Menu, Button, Text, Divider } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    text: "ABOUT",
    items: [
      { text: "University Profile", link: "/about/university-profile" },
      { text: "Administration", link: "/about/administration" },
      { text: "Pride Hall", link: "/about/pride-hall" },
      { text: "Outcome-Based Education (OBE)", link: "/about/obe" },
      { text: "Contact", link: "/about/contact" },
    ],
  },
  {
    text: "ACADEMICS",
    items: [
      { text: "Academic Overview", link: "/academics" },
      { text: "Colleges", link: "/academics" },
      { text: "Academic Calendar", link: "/academics" },
      { text: "Computerized Registration System (CRS)", link: "/academics" },
    ],
  },
  {
    text: "ADMISSIONS",
    items: [
      {
        text: "PLM Admission Test (PLMAT)",
        link: "/admissions/plmat",
      },
      {
        text: "Undergraduate Programs",
        link: "/admissions/undergrad-programs",
      },
      {
        text: "Scholarship and Financial Aid",
        link: "/admissions/scholarship-and-financial-aid",
      },
      {
        text: "Medical College Admission Test (MCAT)",
        link: "/admissions/mcat",
      },
      {
        text: "College of Law Admission Test (CLAT)",
        link: "/admissions/clat",
      },
    ],
  },
  {
    text: "RESEARCH",
    items: [
      {
        text: "Theses and Dissertation",
        link: "/research/theses-and-dissertation",
      },
    ],
  },
  {
    text: "NEWS",
    items: [
      {
        text: "Press Release",
        link: "/news/press-release",
      },
      {
        text: "Gallery",
        link: "/news/gallery",
      },
      {
        text: "Special Reports",
        link: "/news/special-reports",
      },
      {
        text: "News Letter",
        link: "/news/news-letter",
      },
      {
        text: "Announcements",
        link: "/news/announcements",
      },
      {
        text: "Message from the University President",
        link: "/news/message",
      },
    ],
  },
  {
    text: "DOWNLOADS",
    link: "/downloads",
  },
];

function Menus({ color, fsize, fweight, onMenuItemClick }) {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [MenuOpen, setMenuOpen] = useState(Array(menuItems.length).fill(false));

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const toggleMenu = (index) => {
    if (menuItems[index].items) {
      const updatedMenuOpen = MenuOpen.map((state, i) => i === index);
      setMenuOpen(updatedMenuOpen);
    } else {
      // If it doesn't have submenu items, navigate to its link
      navigate(menuItems[index].link);
    }
  };

  useEffect(() => {
    const closeMenus = () => {
      setMenuOpen(Array(menuItems.length).fill(false));
    };

    document.addEventListener("click", closeMenus);

    return () => {
      document.removeEventListener("click", closeMenus);
    };
  }, []);

  const navigateToAcademics = (subLink) => {
    navigate("/academics/" + subLink); // Navigate to the AcademicShell route with the specific sublink
  };

  return (
    <div>
      {menuItems.map((menuItem, index) => (
        <Menu shadow="md" width={250} className="menu" key={index}>
          <Menu.Target>
            <Button
              variant="unstyled"
              c={color}
              rightIcon={
                menuItems[index].items ? (
                  MenuOpen[index] ? (
                    <IconChevronUp size="1rem" />
                  ) : (
                    <IconChevronDown size="1rem" />
                  )
                ) : null
              }
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu(index);
              }}
            >
              <Text ff="lato" fz={fsize} fw={fweight}>
                {menuItem.text}
              </Text>
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {menuItem.items &&
              menuItem.items.map((item, itemIndex) => (
                <Menu.Item
                  key={itemIndex}
                  onClick={() => {
                    // navigate(item.link);
                    // toggleMenu(index);
                    if (menuItem.text === "Colleges") {
                      navigateToAcademics("colleges"); // Handle the "Colleges" click
                    } else {
                      navigate(item.link);
                    }
                    toggleMenu(index);
                  }}
                >
                  <Text
                    className={hoveredItem === itemIndex ? "item" : "item-out"}
                    onMouseEnter={() => handleMouseEnter(itemIndex)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.text}
                  </Text>
                </Menu.Item>
              ))}
          </Menu.Dropdown>
        </Menu>
      ))}
    </div>
  );
}

export default Menus;
