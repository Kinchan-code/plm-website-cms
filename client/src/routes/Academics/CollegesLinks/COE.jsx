import React from "react";
import { Space, Text, Box, Divider, Grid, List } from "@mantine/core";
import Introduction from "../../../Components/Introduction";
import CMSAccordion from "../../../Components/Accordion";
import CMSCard from "../../../Components/Card";
import CMSTimeline from "../../../Components/Timeline";
import BusinessCard from "../../../Components/BusinessCard";
import {
  COEAccordionItems,
  COEtimelineItems,
  COEBusinessCardData,
} from "../links";
import pic from "../Images/crs.png";
import { useNavigate } from "react-router-dom";

function COE({ selectedSublink }) {
  const navigate = useNavigate();
  const title = selectedSublink.toUpperCase();
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
          College of {selectedSublink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      <Introduction
        src={pic}
        content="College Engineering offers a comprehensive education in engineering disciplines. PLM's engineering programs typically emphasize theory, practical skills, and a strong commitment to addressing the unique challenges of the local community."
      />
      <div style={{ padding: "1rem" }}>
        <CMSAccordion items={COEAccordionItems} />
      </div>
      <Space h="lg" />
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Text fz="lg" fw="bold" p="lg">
          MORE ABOUT COLLEGE OF {title}
        </Text>
      </div>
      <div style={{ padding: "2rem" }}>
        <CMSCard
          title="VISION"
          bgColor="color.2"
          height="40vh"
          content={
            <Text>
              The College of Engineering will be the premier college in
              technological education, research and extension services.
            </Text>
          }
        />
      </div>
      <Grid
        columns={40}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid.Col span={19}>
          <CMSCard
            title="MISSION"
            bgColor="color.2"
            height="90vh"
            content={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text ta="start">
                  Guided by this vision, we commit ourselves to:
                </Text>
                <List type="ordered">
                  <List.Item>
                    <Text>
                      Uphold excellence through curriculum development and
                      teaching, significant advances in knowledge, and services
                      to the community of which we are a part;
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Nurture students with a technological education of the
                      highest quality that will enable them to be professionally
                      competent, community directed and God centered
                      individuals; and
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Develop faculty members and staff to be excellent examples
                      in leadership and management.
                    </Text>
                  </List.Item>
                </List>
              </div>
            }
          />
        </Grid.Col>
        <Grid.Col span={19}>
          <CMSCard
            title="OBJECTIVES"
            bgColor="color.2"
            height="90vh"
            content={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text>Believing in our mission, we earnestly seek to:</Text>
                <List type="ordered">
                  <List.Item>
                    <Text>
                      Facilitate the achievement of academic goals by regularly
                      reviewing curricular programs, ensuring that they surpass
                      the standards set by governing bodies.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Provide a productive environment to facilitate quality
                      research and socially responsive extension service.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Develop dynamism among administrators, faculty, student
                      and services personnel, embracing diversities that
                      contribute to the growth of the college.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      Develop dynamism among administrators, faculty, student
                      and services personnel, embracing diversities that
                      contribute to the growth of the college.
                    </Text>
                  </List.Item>
                </List>
              </div>
            }
          />
        </Grid.Col>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <CMSTimeline title="HISTORY" items={COEtimelineItems} />
      </div>
      <div>
        <BusinessCard {...COEBusinessCardData} />
      </div>
    </Box>
  );
}

export default COE;
