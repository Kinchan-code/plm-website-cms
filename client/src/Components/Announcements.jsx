// import React from "react";
// import { Container, SimpleGrid, Image } from "@mantine/core";
// import pic1 from "../assets/AnnounceTest1.png";
// import pic2 from "../assets/AnnounceTest2.png";

// function Announcements() {
//   return (
//     <div>
//       <SimpleGrid
//         cols={2}
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           margin: "auto",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             height: "70vh",
//           }}
//         >
//           <Container>
//             <Image src={pic1} />
//           </Container>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Container>
//             <Image src={pic2} />
//           </Container>
//         </div>
//       </SimpleGrid>
//     </div>
//   );
// }

// export default Announcements;
// Announcements.js
// Announcements.js
import React from "react";
import { Container, SimpleGrid } from "@mantine/core";

function Announcements({ children }) {
  return (
    <div>
      <SimpleGrid
        cols={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "70vh",
            }}
          >
            <Container>{child}</Container>
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Announcements;
