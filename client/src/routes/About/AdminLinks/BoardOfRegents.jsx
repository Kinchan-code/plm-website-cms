import React from "react";
import { Text, Box, Divider, Grid, List } from "@mantine/core";
import Card from "../../../Components/Card";

function BoardOfRegents({ selectedSublink }) {
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
          {selectedSublink}
        </Text>
      </div>
      <Divider c="#eeee" size="md" />
      
      <div style={{ padding: "1rem" }}>
          <Text>The Board of Regents, the highest policy-making body of the university, sets and steers the direction of the university to fulfill 
its vision and mission.</Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>The 2019-2025 Board presents a stellar lineup comprised of esteemed professionals in their respective fields. They bring with 
them expertise that would help PLM realize its goals.</Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
        Board Members (As of April 30, 2023)        </Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>The Chairperson of the Board and the University President are elected from among the regents themselves. The Chairperson 
presides over all the meetings of the Board, while the University President serves as its ex-officio Vice-Chair.</Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
        Composition</Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>The Board of Regents is a collegial body composed of seven (7) highly distinguished members, six (6) of whom are appointed by the 
Mayor of the city of Manila, with the consent of the then-Municipal Board, which is now the City Council of Manila. Of the six 
members appointed by the Mayor, the PLM Charter prescribes that one comes from the faculty, another is a distinguished alumnus, 
and one of the others from the field of education. The university regents are chosen on the basis of their professional competence. 
They are men of high and eminent integrity and distinguished professionals among the citizenry. The Division of City Schools (DCS) 
superintendent of Manila sits as an ex-officio member of the Board of Regents and becomes the 7th member of the Board.</Text>
      </div>

      <div>
        <Text fz="xl" fw="bold" p="md">
        Term of Office</Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>Confirmed regential appointees automatically serve for a fixed term of six (6) years or until their successors shall have been 
appointed and qualified. They may therefore serve for more than 6 years on a hold-over capacity, provided no replacement shall 
have been qualified as of yet.</Text>
      </div>

      <div style={{ padding: "1rem" }}>
          <Text>In case an incumbent regent cannot finish his term of six years by reason of resignation, death or other incapacities, the vacancy shall 
be filled by an appointment by the Mayor of the City of Manila, with the consent of the City Council, and the appointee shall 
hold office for the unexpired portion of the term, instead of the fixed term of six (6) years.</Text>
      </div>
    </Box>
  );
}

export default BoardOfRegents;
