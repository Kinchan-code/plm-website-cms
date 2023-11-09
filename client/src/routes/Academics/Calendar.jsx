import React, { useRef } from "react";
import { Text, Box, Divider, Button } from "@mantine/core";
import PDF from "../../Components/PDF";
import { useNavigate } from "react-router-dom";

function Calendar({ selectedLink }) {
  const navigate = useNavigate();
  const pdfIframeRef = useRef(null);

  const download = () => {
    const iframe = pdfIframeRef.current;
    if (iframe) {
      const pdfURL = iframe.getAttribute("src");
      const anchor = document.createElement("a");
      anchor.href = pdfURL;
      anchor.download = "University_Calendar_SY_2022-2023.pdf";
      anchor.click();
    }
  };
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
      <div>
        <Text p="xs">
          View or download our academic calendar for Academic Year 2023-2024.
        </Text>
      </div>
      <div>
        <PDF
          src="https://plm.edu.ph/images/downloads/University_Calendar_SY_2022-2023_page-0001.pdf"
          title="PDF Viewer"
          ref={pdfIframeRef}
        />
      </div>
      <div style={{ padding: "1rem" }}>
        <Button
          radius="md"
          className="button"
          c="black"
          uppercase
          onClick={download}
        >
          <Text>Download</Text>
        </Button>
      </div>
    </Box>
  );
}

export default Calendar;
