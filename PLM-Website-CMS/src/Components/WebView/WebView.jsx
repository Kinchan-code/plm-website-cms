import React from "react";
import { AppShell, Header, Footer, Text, useMantineTheme } from "@mantine/core";
import WebHeader from "../WebView/WebHeader";
import WebFooter from "../WebView/WebFooter";

function WebView() {
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
        footer={<WebFooter />}
        header={<WebHeader />}
      >
        <Text className="Web-Container">This is Web View</Text>
      </AppShell>
    </div>
  );
}

export default WebView;
