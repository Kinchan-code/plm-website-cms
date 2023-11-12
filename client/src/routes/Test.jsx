import React from "react";
import { Table, Container, Text } from "@mantine/core";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

function Test() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>
        <Text ta="center">{element.position}</Text>
      </td>
      <td>
        <Text ta="center">{element.name}</Text>
      </td>
      <td>
        <Text ta="center">{element.symbol}</Text>
      </td>
      <td>
        <Text ta="center">{element.mass}</Text>
      </td>
    </tr>
  ));

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Table
        verticalSpacing="xl"
        p="md"
        fontSize="md"
        highlightOnHover
        withBorder
        withColumnBorders
      >
        <thead>
          <tr>
            <th>
              <Text ta="center">Element position</Text>
            </th>
            <th>
              <Text ta="center">Element name</Text>
            </th>
            <th>
              <Text ta="center">Symbol</Text>
            </th>
            <th>
              <Text ta="center">Atomic mass</Text>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
}
export default Test;
