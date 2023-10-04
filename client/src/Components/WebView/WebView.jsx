import React, { useState, useEffect } from "react";
import {
  AppShell,
  Button,
  Container,
  Text,
  useMantineTheme,
  Image,
  Divider,
  SimpleGrid,
  Affix,
  ActionIcon,
  Transition,
  rem,
} from "@mantine/core";
import {
  IconSquareRoundedArrowUpFilled,
  IconHandClick,
} from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import WebHeader from "./WebHeader";
import Slideshow from "../Slideshow";
import { Images } from "../Images";
import Announcements from "../Announcements";

function WebView() {
  const [scroll, scrollTo] = useWindowScroll();
  const [containerHidden, setContainerHidden] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollThreshold = 600;
      if (window.scrollY >= scrollThreshold) {
        setContainerHidden(true);
      } else {
        setContainerHidden(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    pic1,
    pic2,
    pic3,
    pic4,
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
  const handleScrollTo = () => {
    window.scrollTo({
      top: 650,
      behavior: "smooth",
    });
  };
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
              marginTop: "13rem",
              position: "fixed",
              zIndex: 0,
            }}
          >
            <div style={{ alignItems: "center" }}>
              <Container
                id="myContainer"
                className={containerHidden ? "hidden-container" : ""}
                style={{ marginLeft: "-0.5rem" }}
              >
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
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div style={{ paddingLeft: "3rem" }}>
                    <Button
                      radius="lg"
                      style={{ backgroundColor: "#d5a106", zIndex: "0" }}
                    >
                      <Text fz="lg" c="#000">
                        CHECK OUR PROGRAM
                      </Text>
                    </Button>
                  </div>
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <Button
                      c="#022f76"
                      radius="lg"
                      rightIcon={<IconHandClick size="1.5rem" />}
                      onClick={handleScrollTo}
                      style={{ backgroundColor: "#f9f8f8" }}
                    >
                      <Text fw="bold" fz="lg">
                        EXPLORE MORE
                      </Text>
                    </Button>
                  </div>
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
          <div style={{ height: "80vh", padding: "1rem", marginTop: "2rem" }}>
            <SimpleGrid cols={2} spacing="xl">
              <div>
                <Text fz="xl" fw="bold" ff="lato">
                  UNIVERSITY UPDATES
                </Text>
                <Divider size="xl" color="#FFC60B" />
                <Announcements>
                  <Image src={pic1} />
                  <Image src={pic2} />
                </Announcements>
              </div>
              <div>
                <Text fz="xl" fw="bold" ff="lato">
                  UNIVERSITY SERVICES
                </Text>
                <Divider size="xl" color="#ffc60b" />
                <Announcements>
                  <Image src={pic3} />
                  <Image src={pic4} />
                </Announcements>
              </div>
            </SimpleGrid>
          </div>

          <div
            style={{
              height: "80vh",
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
        </div>
        <Affix position={{ bottom: rem(20), right: rem(20) }}>
          <Transition
            transition="slide-up"
            duration={100}
            mounted={scroll.y > 0}
          >
            {(transitionStyles) => (
              <ActionIcon
                c="#022f76"
                size="lg"
                radius="lg"
                variant="unstyled"
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                <IconSquareRoundedArrowUpFilled size="2rem" />
              </ActionIcon>
            )}
          </Transition>
        </Affix>
      </AppShell>
    </div>
  );
}

export default WebView;
