import React, { useState, useEffect } from "react";
import {
  AppShell,
  Button,
  Container,
  Text,
  useMantineTheme,
} from "@mantine/core";
import WebHeader from "./WebHeader";
import Slideshow from "../Slideshow";

function WebView() {
  const theme = useMantineTheme();
  const [containerZIndex, setContainerZIndex] = useState(1);
  useEffect(() => {
    // Add a scroll event listener to change the z-index of the container
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // You can adjust the threshold as needed
      if (scrollY > 200) {
        setContainerZIndex(0); // Bring the container below the other div
      } else {
        setContainerZIndex(1); // Bring the container above the other div
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <AppShell
        padding="0"
        styles={{
          padding: "0",
          margin: "0",
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        header={<WebHeader />}
      >
        <div
          className="main"
          style={{
            display: "flex",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              marginTop: "10rem",
              position: "fixed",
              zIndex: containerZIndex,
            }}
          >
            <div style={{ alignItems: "center" }}>
              <Container>
                <Text
                  fz="4rem"
                  fw="bold"
                  p="3rem"
                  c="#fff"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    marginBottom: "-5rem",
                  }}
                >
                  Study at Pamantasan ng Lungsod ng Maynila
                </Text>
                <Text
                  fz="1.9rem"
                  p="3rem"
                  c="#fff"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    marginBottom: "-2rem",
                  }}
                >
                  The Philippines' first and only chartered autonomous local
                  university.
                </Text>
                <div style={{ paddingLeft: "3rem" }}>
                  <Button radius="md" style={{ backgroundColor: "#FFC60B" }}>
                    <Text
                      c="#000"
                      style={{
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      Check our Program
                    </Text>
                  </Button>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#efefef",
            position: "absolute",
            zIndex: "1",
          }}
        >
          <div style={{ height: "100vh", padding: "1rem" }}>
            <Text fz="lg" style={{ fontFamily: "Lato, sans-serif" }}>
              Hello
            </Text>
          </div>
          <div
            style={{
              height: "100vh",
              backgroundColor: "#fff",
              padding: "1rem",
            }}
          >
            <Text fz="lg" style={{ fontFamily: "Lato, sans-serif" }}>
              Hello World
            </Text>
          </div>
          <div
            style={{
              height: "100vh",
              backgroundColor: "#fff",
              padding: "1rem",
            }}
          >
            <Slideshow />
          </div>
        </div>
      </AppShell>
    </div>
  );
}

export default WebView;
