// import React from "react";
// import { Timeline, Text, Space } from "@mantine/core";

// function CMSTimeline({ title, items }) {
//   return (
//     <div>
//       <Text fz="lg" fw="bold">
//         {title}
//       </Text>
//       <Space h="xl" />
//       <Timeline active={4} color="color.4" bulletSize={20} lineWidth={2}>
//         {items.map((item, index) => (
//           <Timeline.Item key={index} title={item.title}>
//             <Text color="color.3" size="sm" ta="justify">
//               {item.content}
//             </Text>
//           </Timeline.Item>
//         ))}
//       </Timeline>
//     </div>
//   );
// }

// export default CMSTimeline;
import React from "react";
import { Timeline, Text, Space, List } from "@mantine/core";

function CMSTimeline({ title, items }) {
  return (
    <div>
      <Text fz="lg" fw="bold">
        {title}
      </Text>
      <Space h="xl" />
      <Timeline active={4} color="color.4" bulletSize={20} lineWidth={2}>
        {items.map((item, index) => (
          <Timeline.Item key={index} title={item.title}>
            <Text color="color.3" size="md" ta="justify">
              {item.content}
            </Text>
            {item.hasBullets && item.subcontent && (
              <List style={{ marginLeft: "1rem" }}>
                {item.subcontent.map((bullet, bulletIndex) => (
                  <List.Item key={bulletIndex}>
                    <Text color="color.3" size="md" ta="justify">
                      {bullet}
                    </Text>
                  </List.Item>
                ))}
              </List>
            )}
            {!item.hasBullets && item.subcontent && (
              <div style={{ marginLeft: "1rem" }}>
                <Text color="color.3" size="md" ta="justify">
                  {item.subcontent}
                </Text>
              </div>
            )}
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

export default CMSTimeline;
