import React from "react";
import { AppShell, Text, useMantineTheme } from "@mantine/core";
import MobileHeader from "../MobileView/MobileHeader";
import MobileFooter from "../MobileView/MobileFooter";

function MobileView() {
  const theme = useMantineTheme();
  return (
    <div>
      <AppShell
        padding="0"
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        footer={<MobileFooter />}
        header={<MobileHeader />}
      >
        {/* <Text className="Mobile-Container">This is Mobile View</Text> */}
        <div className="main">
          {/* <Text className="Web-Container">This is Web View</Text> */}
        </div>
        <div
          style={{ height: "100vh", backgroundColor: "#fff", padding: "1rem" }}
        >
          <Text fz="lg">
            {" "}
            Scroll Up and Down this page to see the parallax scrolling effect.
            This div is just here to enable scrolling. Tip: Try to remove the
            background-attachment property to remove the scrolling effect.
          </Text>
        </div>
      </AppShell>
    </div>
  );
}

export default MobileView;
