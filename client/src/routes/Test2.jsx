import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import Navigation from "../Components/Navigation";
import { links } from "./Academics/links";

function Test2() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbar={<Navigation title="ACADEMICS" links={links} />}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

export default Test2;
