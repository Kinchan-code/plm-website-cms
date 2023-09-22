import React from "react";
import {
  AppShell,
  Button,
  Container,
  Text,
  useMantineTheme,
  Image,
  Divider,
  SimpleGrid,
} from "@mantine/core";
import WebHeader from "./WebHeader";
import Slideshow from "../Slideshow";
import { Images } from "../Images";

function WebView() {
  const {
    sample,
    sample1,
    sample2,
    sample3,
    sample4,
    ex,
    ex1,
    ex2,
    ex3,
    Logo,
  } = Images;

  const slidesContentLeft = [
    <Image src={sample} />,
    <Image src={sample1} />,
    <Image src={sample2} />,
    <Image src={sample3} />,
    <Image src={sample4} />,
  ];
  const slidesContentRight = [
    <Image src={ex} />,
    <Image src={ex1} />,
    <Image src={ex2} />,
    <Image src={ex3} />,
    <Image src={Logo} />,
  ];
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
          <div
            style={{
              marginTop: "10rem",
              position: "fixed",
              zIndex: 0,
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
                  <Button
                    radius="md"
                    style={{ backgroundColor: "#FFC60B", zIndex: "0" }}
                  >
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
              minWidth: "100%",
              backgroundColor: "#fff",
              padding: "1rem",
              zIndex: "1",
            }}
          >
            <SimpleGrid cols={2} spacing="xl">
              <div>
                <Text fz="xl" fw="bold" ff="lato">
                  UNIVERSITY UPDATES
                </Text>
                <Divider size="xl" color="#FFC60B" />
                <Slideshow slides={slidesContentLeft} />
              </div>
              <div>
                <Text fz="xl" fw="bold" ff="lato">
                  UNIVERSITY SERVICES
                </Text>
                <Divider size="xl" color="#ffc60b" />
                <Slideshow slides={slidesContentRight} />
              </div>
            </SimpleGrid>
          </div>
        </div>
      </AppShell>
    </div>
  );
}

export default WebView;
