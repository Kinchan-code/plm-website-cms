import { Menu, Button, Text } from "@mantine/core";
import { IconCaretDown } from "@tabler/icons-react";

function Menus() {
  return (
    <div>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button variant="unstyled" c="#fff">
            <Text ff="lato">Abouts</Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>
            <Text> Settings </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Messages </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Gallery </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Search </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Transfer my data </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Delete my account </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button variant="unstyled" c="#fff">
            <Text ff="lato">Academics</Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>
            <Text> Settings </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Messages </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Gallery </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Search </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Transfer my data </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Delete my account </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button variant="unstyled" c="#fff">
            <Text ff="lato">Admissions</Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>
            <Text> Settings </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Messages </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Gallery </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Search </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Transfer my data </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Delete my account </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button variant="unstyled" c="#fff">
            <Text ff="lato">Research</Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>
            <Text> Settings </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Messages </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Gallery </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Search </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Transfer my data </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Delete my account </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button variant="unstyled" c="#fff" style={{}}>
            <Text ff="lato">News</Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>
            <Text> Settings </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Messages </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Gallery </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Search </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Transfer my data </Text>
          </Menu.Item>
          <Menu.Item>
            <Text> Delete my account </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button variant="unstyled" c="#fff">
            <Text ff="lato">Downloads</Text>
          </Button>
        </Menu.Target>
      </Menu>
    </div>
  );
}

export default Menus;
