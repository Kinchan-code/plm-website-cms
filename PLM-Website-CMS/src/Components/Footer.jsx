import { Divider, Image } from "@mantine/core";
import DarktoggleButton from "./DarktoggleButton";
import Logo from "../assets/PLMLogo.png";

function Footer() {
  return (
    <>
      <div>
        <Divider />
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image maw={50} radius="md" src={Logo} alt="Random image" />
          <DarktoggleButton />
        </div>
      </div>
    </>
  );
}

export default Footer;
