import React, { useState, useEffect, useRef } from "react";
import { Image } from "@mantine/core";
import Menus from "./Menus";
import SearchBar from "./Searchbar";
import logo from "../assets/PLMLogotext.png";

function Nav({ color, style }) {
  return (
    <div>
      <nav className="nav" style={style}>
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
          <Menus color={color} fsize="md" />
        </div>
      </nav>
      {/* Add a placeholder element to prevent content from jumping */}
      {/* <div style={{ height: "30vh" }}></div> */}
    </div>
  );
}

export default Nav;
