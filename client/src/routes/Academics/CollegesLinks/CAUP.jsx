import React, { useEffect } from "react";
import { Text, Box, Divider, Space, List } from "@mantine/core";
import CMSAccordion from "../../../Components/Accordion";
import CMSTimeline from "../../../Components/Timeline";
import CMSCard from "../../../Components/Card";
import BusinessCard from "../../../Components/BusinessCard";
import Introduction from "../../../Components/Introduction";
import { timelineItems, accordionItems, CaupBusinessCardData } from "../links";
import { useNavigate } from "react-router-dom";

function CAUP({ selectedLink }) {
  const navigate = useNavigate();
  const uppercasedLink = selectedLink.toUpperCase();

  return (
    <Box style={{ fontFamily: "Open Sans, sans serif" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Text size="1.5rem" fw="bold" p="xs">
          {selectedLink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <div style={{ display: "flex" }}>
        <Introduction
          content=" The College of Architecture and Urban Planning at PLM offers various
          degree programs, emphasizing design, theory, and practical skills to
          prepare students for careers in these fields. The college prioritizes
          creativity, sustainability, and innovative urban development."
        />
      </div>
      <div style={{ padding: "2rem" }}>
        <CMSAccordion items={accordionItems} />
      </div>
      <Space h="lg" />
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text fz="lg" fw="bold" p="lg">
            MORE ABOUT COLLEGE OF {uppercasedLink}
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <CMSCard
              title="VISION"
              bgColor="color.2"
              height="50vh"
              content={
                <Text>
                  It will become a partner of choice as an active provider of
                  competent industry players in today's built-environment
                  market.
                </Text>
              }
            />
          </div>
          <Space w="xl" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <CMSCard
              title="MISSION"
              bgColor="color.2"
              height="50vh"
              content={
                <List type="ordered">
                  <List.Item>
                    <Text>
                      Transforming mindsets to highly competitive outlooks.{" "}
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Create values mutually beneficial to students and the
                      institution by providing opportunities of borderless
                      cooperation.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Constant adherence to excellence in professionalism,
                      creativity, teamwork and leadership.
                    </Text>
                  </List.Item>
                </List>
              }
            />
          </div>
        </div>
        <Space w="xl" />
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <CMSTimeline title="HISTORY" items={timelineItems} />
        </div>
        <div>
          <BusinessCard {...CaupBusinessCardData} />
        </div>
      </div>
    </Box>
  );
}

export default CAUP;
