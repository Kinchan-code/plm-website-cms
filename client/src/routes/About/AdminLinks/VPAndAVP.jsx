import React from "react";
import { Text, Box, Divider, Grid, Image, Card, Space } from "@mantine/core";
import C_R from "../Images/C_R.jpg";
import A_M from "../Images/A_M.jpg";
import K_L_L from "../Images/K_L_L.jpg";
import P_J_A_G from "../Images/P_J_A_G.jpg";
import D_M_C from "../Images/D_M_C.jpg";
import D_C_M from "../Images/D_C_M.jpg";
import M from "../Images/M.jpg";
import H_D_N from "../Images/H_D_N.jpg";
import R_P_M from "../Images/R_P_M.jpg";
import DUMMY from "../Images/DUMMY.png";


function VPAndAVP({ selectedSublink }) {
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

      <Space h="lg" />
      <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >
      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={C_R}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>
        
        <div style={{textAlign: "center"}}>
          <Text  fw={"bold"} size="lg" mt="md" color="#006699">
            CLYDELLE M. RONDARIS, PH.D.
          </Text>

          <Text mt="xs" size="sm">
            Executive Vice President
          </Text>
        </div>
        
        </Card>
      </Grid.Col>
    </Grid>

    <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >
      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={DUMMY}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699">
            LALAINE A. ISIP
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
            Vice President for Academic Affairs and Chairperson of GAD-Technical Working Group
          </Text>
        </div>
        </Card>
      </Grid.Col>

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={A_M}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699">
            ANDREA SOLOMON-MALUNES
          </Text>

          <Text mt="xs" size="sm">
            Vice President for Finance
          </Text>
        </div>
        </Card>
      </Grid.Col>

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={K_L_L}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699">
            KAREN L. LEYSON
          </Text>

          <Text mt="xs" size="sm">
            Vice President for Administration
          </Text>
        </div>
        </Card>
      </Grid.Col>
    </Grid>

    <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={D_M_C}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699" style={{marginBottom:"-12px", marginTop:"10px"}}>
            DAN MICHAEL A. CORTEZ, DIT
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
            Assistant Vice President for University Priorities
          </Text>
        </div>
        </Card>
      </Grid.Col>

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={R_P_M}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699">
            ATTY. RELSON P. MORAL
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
            Assistant Vice President for Legal Affairs 
          </Text>
        </div>
        </Card>
      </Grid.Col>

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={H_D_N}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699">
            HERMINIA D. NUNEZ
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
            Assistant Vice President for Second Administrative Group
          </Text>
        </div>
        </Card>
      </Grid.Col>
    </Grid>

    <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={P_J_A_G}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699" style={{marginBottom:"-12px", marginTop:"10px"}}>
            PENIEL JEAN A. GILDO
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-9px"}}>
            Assistant Vice President for Academic Affairs
          </Text>
        </div>
        </Card>
      </Grid.Col>

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={M}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699">
            KHATALYN E. MATA, DIT
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
            Assistant Vice President for Academic Support Units
          </Text>
        </div>
        </Card>
      </Grid.Col>

      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={D_C_M}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>

      <div style={{textAlign: "center"}}>
          <Text fw={"bold"} size="lg" mt="md" color="#006699">
            DINA C. MENDEZ
          </Text>

          <Text mt="xs" size="sm" style={{marginBottom:"-11px", marginTop:"-.5px"}}>
            Assistant Vice President for Public Affairs
          </Text>
        </div>
        </Card>
      </Grid.Col>
    </Grid>

    <Grid
        columns={30}
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >
      <Grid.Col span={10}>
        <Card
        shadow="sm"
        padding="xl"
        component="a"
        
        target="_blank"
      >
        <Card.Section style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={DUMMY}
          alt="No way!"
          style={{
            width: '70%', // Set the width to 100%
            height: '50%', // Set the height to 100%
            objectFit: 'cover', // Crop the image to cover the container
            transform: 'scale(1.5)', // Zoom the image permanently
            transformOrigin: 'top left', // Set the origin of the transformation to the top
          }}
        />
      </Card.Section>
        
        <div style={{textAlign: "center"}}>
          <Text  fw={"bold"} size="lg" mt="md" color="#006699">
            VINA G. MUNDALA
          </Text>

          <Text mt="xs" size="sm">
            Assistant Vice President for Administration
          </Text>
        </div>
        
        </Card>
      </Grid.Col>
    </Grid>

    </Box>
  );
}

export default VPAndAVP;
