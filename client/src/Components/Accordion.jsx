// import React from "react";
// import { Accordion, Text, List } from "@mantine/core";

// function CMSAccordion({ items }) {
//   return (
//     <Accordion variant="separated" radius="md">
//       {items.map((item) => (
//         <Accordion.Item key={item.value} value={item.value}>
//           <Accordion.Control>
//             <Text fw="bold">{item.title}</Text>
//           </Accordion.Control>
//           <Accordion.Panel>
//             {item.hasBullets ? (
//               <List p="md">
//                 {Array.isArray(item.content) ? (
//                   item.content.map((content, index) => (
//                     <List.Item key={index}>
//                       <Text ta="justify">{content}</Text>
//                     </List.Item>
//                   ))
//                 ) : (
//                   <List.Item>
//                     <Text ta="justify">{item.content}</Text>
//                   </List.Item>
//                 )}
//               </List>
//             ) : (
//               <>
//                 {Array.isArray(item.content) ? (
//                   item.content.map((paragraph, index) => (
//                     <React.Fragment key={index}>
//                       {index === 0 && <Text fw="bold">Section Title:</Text>}
//                       <Text ta="justify">{paragraph}</Text>
//                       <br /> {/* Add a newline between paragraphs */}
//                     </React.Fragment>
//                   ))
//                 ) : (
//                   <Text ta="justify">{item.content}</Text>
//                 )}
//               </>
//             )}
//           </Accordion.Panel>
//         </Accordion.Item>
//       ))}
//     </Accordion>
//   );
// }

// export default CMSAccordion;
// import React from "react";
// import { Accordion, List, Text } from "@mantine/core";

// function CMSAccordion({ items }) {
//   return (
//     <Accordion variant="separated" radius="md">
//       {items.map((item) => (
//         <Accordion.Item key={item.value} value={item.value}>
//           <Accordion.Control>
//             {item.title && <Text fw="bold">{item.title}</Text>}
//           </Accordion.Control>
//           <Accordion.Panel>
//             {item.hasBullets ? (
//               <List p="md">
//                 {Array.isArray(item.content) ? (
//                   item.content.map((content, index) => (
//                     <List.Item key={index}>
//                       {content.title && <Text>{content.title}</Text>}
//                       <Text>{content.text || content}</Text>
//                     </List.Item>
//                   ))
//                 ) : (
//                   <List.Item>
//                     <Text>{item.content.text || item.content}</Text>
//                   </List.Item>
//                 )}
//               </List>
//             ) : (
//               <>
//                 {Array.isArray(item.content) ? (
//                   item.content.map((paragraph, index) => (
//                     <React.Fragment key={index}>
//                       {index === 0 && <Text>{paragraph.title}</Text>}
//                       <br />
//                       <Text>{paragraph.text || paragraph}</Text>
//                       <br />
//                     </React.Fragment>
//                   ))
//                 ) : (
//                   <>
//                     <Text>{item.content.title}</Text>
//                     <Text>{item.content.text || item.content}</Text>
//                   </>
//                 )}
//               </>
//             )}
//           </Accordion.Panel>
//         </Accordion.Item>
//       ))}
//     </Accordion>
//   );
// }

// export default CMSAccordion;
import React from "react";
import { Accordion, List, Text } from "@mantine/core";

function CMSAccordion({ items }) {
  return (
    <Accordion variant="separated" radius="md">
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>
            {item.title && <Text fw="bold">{item.title}</Text>}
          </Accordion.Control>
          <Accordion.Panel>
            {item.hasBullets ? (
              <List p="md">
                {Array.isArray(item.content) ? (
                  item.content.map((content, index) => (
                    <List.Item key={index}>
                      {content.title && <Text fw="bold">{content.title}</Text>}
                      {Array.isArray(content.text) ? (
                        content.text.map((paragraph, idx) => (
                          <React.Fragment key={idx}>
                            <Text ta="justify">{paragraph}</Text>
                            <br />
                          </React.Fragment>
                        ))
                      ) : (
                        <Text ta="justify">{content.text || content}</Text>
                      )}
                    </List.Item>
                  ))
                ) : (
                  <List.Item>
                    <Text ta="justify">
                      {item.content.text || item.content}
                    </Text>
                  </List.Item>
                )}
              </List>
            ) : (
              <>
                {Array.isArray(item.content) ? (
                  item.content.map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph.title && (
                        <Text fw="bold">{paragraph.title}</Text>
                      )}
                      {Array.isArray(paragraph.text) ? (
                        paragraph.text.map((text, idx) => (
                          <React.Fragment key={idx}>
                            <br />
                            <Text ta="justify">{text}</Text>
                          </React.Fragment>
                        ))
                      ) : (
                        <Text ta="justify">{paragraph.text || paragraph}</Text>
                      )}
                      <br /> {/* Add a newline between paragraphs */}
                    </React.Fragment>
                  ))
                ) : (
                  <>
                    <Text fw="bold">{item.content.title}</Text>
                    <Text ta="justify">
                      {item.content.text || item.content}
                    </Text>
                  </>
                )}
              </>
            )}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default CMSAccordion;
