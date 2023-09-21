// import React, { useState, useEffect } from "react";
// import { Button, Container, Text } from "@mantine/core";

// function Test2() {
//   return (
//     <div>
//       <div className="main">
//         <div
//           style={{
//             alignItems: "center",
//             position: "fixed",
//             zIndex: "0",
//           }}
//         >
//           <Container>
//             {" "}
//             <Text
//               fz="4rem"
//               fw="bold"
//               p="3rem"
//               c="#fff"
//               style={{
//                 fontFamily: "Lato, sans-serif",
//                 marginBottom: "-5rem",
//               }}
//             >
//               Study at Pamantasan ng Lungsod ng Maynila
//             </Text>
//             <Text
//               fz="1.9rem"
//               p="3rem"
//               c="#fff"
//               style={{
//                 fontFamily: "Lato, sans-serif",
//                 marginBottom: "-2rem",
//               }}
//             >
//               The Philippines' first and only chartered autonomous local
//               university.
//             </Text>
//             <div style={{ paddingLeft: "3rem" }}>
//               <Button radius="md" style={{ backgroundColor: "#FFC60B" }}>
//                 <Text
//                   c="#000"
//                   style={{
//                     fontFamily: "Lato, sans-serif",
//                   }}
//                 >
//                   Check our Program
//                 </Text>
//               </Button>
//             </div>
//           </Container>
//         </div>
//       </div>
//       <>
//         <div>
//           <div
//             style={{
//               height: "1000vh",
//               backgroundColor: "theme.white",
//               padding: "1rem",
//               position: "absolute",
//               zIndex: "1",
//             }}
//           >
//             <>
//               <Text
//                 fz="lg"
//                 style={{
//                   fontFamily: "Lato, sans-serif",
//                 }}
//               >
//                 Your text content here
//               </Text>
//             </>
//           </div>
//         </div>
//       </>
//     </div>
//   );
// }

// export default Test2;
import React, { useState, useEffect } from "react";
import { Button, Container, Text } from "@mantine/core";

function Test2() {
  const [containerZIndex, setContainerZIndex] = useState(1);

  useEffect(() => {
    // Add a scroll event listener to change the z-index of the container
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // You can adjust the threshold as needed
      if (scrollY > 200) {
        setContainerZIndex(0); // Bring the container below the other div
      } else {
        setContainerZIndex(1); // Bring the container above the other div
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="main">
        <div
          style={{
            alignItems: "center",
            position: "fixed",
            zIndex: containerZIndex, // Apply dynamic z-index here
          }}
        >
          <Container>
            <Text
              fz="4rem"
              fw="bold"
              p="3rem"
              c="#fff"
              style={{
                fontFamily: "Lato, sans-serif",
                marginBottom: "-5rem",
              }}
            >
              Study at Pamantasan ng Lungsod ng Maynila
            </Text>
            <Text
              fz="1.9rem"
              p="3rem"
              c="#fff"
              style={{
                fontFamily: "Lato, sans-serif",
                marginBottom: "-2rem",
              }}
            >
              The Philippines' first and only chartered autonomous local
              university.
            </Text>
            <div style={{ paddingLeft: "3rem" }}>
              <Button radius="md" style={{ backgroundColor: "#FFC60B" }}>
                <Text
                  c="#000"
                  style={{
                    fontFamily: "Lato, sans-serif",
                  }}
                >
                  Check our Program
                </Text>
              </Button>
            </div>
          </Container>
        </div>
      </div>
      <div>
        <div
          style={{
            height: "1000vh",
            width: "100vw",
            backgroundColor: "#fff", // Fixed the background color value
            padding: "1rem",
            position: "absolute",
            zIndex: "1",
          }}
        >
          <Text
            fz="lg"
            style={{
              fontFamily: "Lato, sans-serif",
            }}
          >
            Your text content here
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Test2;
