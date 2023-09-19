import React from "react";
import {
  AppShell,
  Button,
  Container,
  Text,
  useMantineTheme,
} from "@mantine/core";
import WebHeader from "../WebView/WebHeader";

function WebView() {
  const theme = useMantineTheme();
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
          <div style={{ marginTop: "13rem" }}>
            <div style={{ alignItems: "center" }}>
              <Container>
                {" "}
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
            height: "100vh",
            backgroundColor: "theme.white",
            padding: "1rem",
          }}
        >
          <>
            {/* <Slideshow /> */}
            <Text fz="lg" style={{ fontFamily: "Lato, sans-serif" }}></Text>
          </>
        </div>
      </AppShell>
    </div>
  );
}

export default WebView;
