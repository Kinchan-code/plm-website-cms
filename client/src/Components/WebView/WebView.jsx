import React, { useState, useEffect, useRef } from "react";
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
  createStyles,
} from "@mantine/core";
import { IconSquareRoundedArrowUpFilled, IconHandClick } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import WebHeader from "./WebHeader";
import Slideshow from "../Slideshow";
import { Images } from "../Images";
import Announcements from "../AnnouncementsLinks";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles(() => ({
  // Header is divided by two sides. Top and Bottom to put the links accordingly
  // CSS for Top side Header when Transparent
  HeaderTransparentTop: {
    background: "rgba(0, 0, 0, 0.5)",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
  },
  // CSS for Top side Header when Solid
  HeaderSolidTop: {
    backgroundColor: "#fff",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  },
  // CSS for Bottom side Header when Transparent
  HeaderTransparentBot: {
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0))",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
  },
  // CSS for Bottom side Header when Solid
  HeaderSolidBot: {
    backgroundColor: "#f9f8f8",
    "& .menu-text:hover": {
      color: "#d5a106",
      transition: "0.3s ease-in-out",
    },
  },
}));

function WebView() {
  const { classes } = useStyles();
  const [navBackgroundTop, setNavBackgroundTop] = useState("HeaderTransparentTop");
  const [navBackgroundBot, setNavBackgroundBot] = useState("HeaderTransparentBot");
  const [isHeaderBotVisible, setHeaderBotVisible] = useState(true);
  const navRefTop = useRef(navBackgroundTop);
  navRefTop.current = navBackgroundTop;
  const navRefBot = useRef(navBackgroundBot);
  navRefBot.current = navBackgroundBot;

  useEffect(() => {
    const handleScroll = () => {
      const targetDivPosition = targetDivRef.current.offsetTop - 100;
      const show = window.scrollY > targetDivPosition;

      if (show) {
        setNavBackgroundTop("HeaderSolidTop");
        setHeaderBotVisible(false);
      } else {
        setNavBackgroundTop("HeaderTransparentTop");
        setHeaderBotVisible(true);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //routing
  const navigate = useNavigate();
  // This are the effects that are used on this page
  const [scroll, scrollTo] = useWindowScroll();

  // This scroll effect will get triggered when you click the explore more button
  const targetDivRef = useRef(null);

  // This are the images used in this page I put it in a single file to avoid many imports
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
    seal,
    topview,
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
    // Main shell
    <div>
      <AppShell
        padding="0"
        styles={{
          padding: "0",
          margin: "0",
          main: {
            background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        // Header that is imported on another file
        header={
          <WebHeader
            topStyle={classes[navRefTop.current]}
            botStyle={classes[navRefBot.current]}
            menuColor={navBackgroundTop === "HeaderSolidTop" ? "#022f76" : "#fff"}
            searchColor={navBackgroundTop === "HeaderSolidTop" ? "#000" : "#fff"}
            isHeaderBotVisible={isHeaderBotVisible}
          />
        }
      >
        {/* Main Container */}
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
            {/* The Big Texts in the middle */}
            <div style={{ alignItems: "center" }}>
              <Container id="myContainer" style={{ marginLeft: "-0.5rem" }}>
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
                  The Philippines' first and only chartered autonomous local university.
                </Text>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div style={{ paddingLeft: "3rem" }}>
                    <Button
                      radius="lg"
                      style={{ backgroundColor: "#d5a106", zIndex: "0" }}
                      onClick={() => {
                        navigate("/admissions/undegrad-programs");
                      }}
                    >
                      <Text fz="lg" fw="bold" c="#000">
                        CHECK OUR PROGRAM
                      </Text>
                    </Button>
                  </div>
                  {/* Explore more button to quickly scroll the page on the contents */}
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
                      onClick={() => {
                        // Scroll to the top of the target div

                        window.scrollTo({
                          top: targetDivRef.current.offsetTop - 50,
                          behavior: "smooth",
                        });
                      }}
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
        {/* Main contents of the page */}
        <div
          ref={targetDivRef}
          style={{
            width: "100%",
            backgroundColor: "#efefef",
            position: "absolute",
            zIndex: "1",
          }}
        >
          {/* Announcements and Press Realeases */}
          <div style={{ height: "80vh", padding: "1rem", marginTop: "2rem" }}>
            <SimpleGrid cols={2} spacing="xl">
              {/* For Announcements */}
              <div>
                <Text fz="xl" fw="bold" ff="lato">
                  ANNOUNCEMENTS
                </Text>
                <Divider size="xl" color="#FFC60B" />
                <Announcements>
                  <Image src={pic1} />
                  <Image src={pic2} />
                </Announcements>
              </div>
              {/* For Press Releases */}
              <div>
                <Text fz="xl" fw="bold" ff="lato">
                  PRESS RELEASES
                </Text>
                <Divider size="xl" color="#ffc60b" />
                <Announcements>
                  <Image src={pic3} />
                  <Image src={pic4} />
                </Announcements>
              </div>
            </SimpleGrid>
          </div>
          {/* Carousel content */}
          <div
            style={{
              display: "flex",
              height: "70vh",
              minWidth: "100%",
              backgroundColor: "#fff",
              padding: "1rem",
              zIndex: "1",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SimpleGrid cols={2} spacing="xl">
              {/* Carousel For university updates */}
              <div>
                <Text fz="xl" fw="bold" ff="lato">
                  UNIVERSITY UPDATES
                </Text>
                <Divider size="xl" color="#FFC60B" />
                {/* The Custom Carousel */}
                <Slideshow slides={slidesContentLeft} />
              </div>
              <div>
                {/* Carousel For university services */}
                <Text fz="xl" fw="bold" ff="lato">
                  UNIVERSITY SERVICES
                </Text>
                <Divider size="xl" color="#ffc60b" />
                {/* The Custom Carousel */}
                <Slideshow slides={slidesContentRight} />
              </div>
            </SimpleGrid>
          </div>
          {/* For Philippine Transparency Seal */}
          <div className="seal">
            {/* Main container of the content */}
            <Container
              p="xl"
              size="xl"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              {/* Logo of the seal */}
              <Image maw={250} src={seal} p="md" />
              {/* Text about the seal */}
              <Text fz="lg" p="md" c="#fff" ta="justify">
                PLM is compliant with the Anti-Red Tape Act (ARTA), as validated by the Civil
                Service Commission-Malacañan Palace. Pursuant to the Philippine Government’s
                Transparency Principle, our Transparency Coordinating Council, created through
                Administrative Order No. 2013-12. Read our {""}
                <Text
                  span
                  fw="bold"
                  onClick={() => {
                    navigate("/citizens-charter");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Citizen's Charter here.
                </Text>
                {""} In case of complaints, please submit proof or any supporting documents through
                this {""}
                <Text span fw="bold" style={{ cursor: "pointer" }}>
                  link
                </Text>
                .
              </Text>
            </Container>
          </div>
          {/* Looking for more info */}
          <div style={{ backgroundColor: "#fff", zIndex: "1" }}>
            {/* Main Container */}
            <Container
              p="xl"
              size="xl"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* For the text and button  */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5rem",
                }}
              >
                <Text fz="2rem" fw="bold" ta="center">
                  Looking for more info?
                </Text>
                <Button
                  onClick={() => {
                    navigate("/archive");
                  }}
                  radius="md"
                  style={{ backgroundColor: "#006699", marginTop: "1rem" }}
                >
                  <Text p="lg"> Check our archive here</Text>
                </Button>
              </div>
              {/* The image */}
              <Image maw={600} src={topview} />
            </Container>
          </div>
          {/* For the Footer */}
          <div
            style={{
              position: "relative",
              bottom: "0",
              backgroundColor: "#fff",
              padding: "0",
            }}
          >
            {/* Imported custom footer */}
            <Footer />
          </div>
        </div>
        {/* For the Go to Top buttom function */}
        <Affix position={{ bottom: rem(20), right: rem(20) }}>
          <Transition transition="slide-up" duration={100} mounted={scroll.y > 0}>
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
