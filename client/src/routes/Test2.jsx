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
  // Define other menu items similarly
];

function Menus({ color, fsize, fweight, onMenuItemClick }) {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [MenuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const toggleMenu = () => setMenuOpen(!MenuOpen);

  useEffect(() => {
    const closeMenus = () => {
      setMenuOpen(false);
    };

    document.addEventListener("click", closeMenus);

    return () => {
      document.removeEventListener("click", closeMenus);
    };
  }, []);
  return (
    <div>
      {menuItems.map((menuItem, index) => (
        <Menu shadow="md" width={250} className="menu" key={index}>
          <Menu.Target>
            <Button
              variant="unstyled"
              c={color}
              rightIcon={
                MenuOpen ? (
                  <IconChevronUp size="1rem" />
                ) : (
                  <IconChevronDown size="1rem" />
                )
              }
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
            >
              <Text ff="lato" fz={fsize} fw={fweight}>
                {menuItem.text}
              </Text>
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {menuItem.items.map((item, itemIndex) => (
              <Menu.Item
                key={itemIndex}
                onClick={() => {
                  navigate(item.link);
                }}
              >
                <Text
                  className={hoveredItem === index ? "item" : "item-out"}
                  onMouseEnter={() => handleMouseEnter(index)}
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
