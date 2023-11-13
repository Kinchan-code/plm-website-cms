import React, { useState, useEffect } from "react";
import { Menu, Button, Text, Divider } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "./LinksData";

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

  const navigateToAbout = (subLink) => {
    navigate("/about/" + subLink); // Navigate to the AboutShell route with the specific sublink
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
                    if (menuItem.text === "University Profile") {
                      navigateToAbout("university-profile"); // Handle the "UnivProfile" click
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
