import React from "react";
import { AppShell, Text, useMantineTheme } from "@mantine/core";
import MobileHeader from "../MobileView/MobileHeader";
import MobileFooter from "../MobileView/MobileFooter";

function MobileView() {
  const theme = useMantineTheme();
  return (
    <div>
      <AppShell
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
        <Text className="Mobile-Container">This is Mobile View</Text>
      </AppShell>
    </div>
  );
}

export default MobileView;
