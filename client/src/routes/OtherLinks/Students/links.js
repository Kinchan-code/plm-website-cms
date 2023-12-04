import CRS from "./CRS";
import NSTP from "./NSTP";
import SC from "./SC";
import SFE from "./SFE";
import SO from "./SO";
import StudentManual from "./StudentManual";
import StudentServices from "./StudentServices";
import Tuition from "./Tuition";

import cradle from "./Images/cradle.jpg";
import css from "./Images/css.jpg";
import ecess from "./Images/ecess.jpg";
import gdsc from "./Images/gdsc.jpg";
import it from "./Images/it.jpg";
import magwayen from "./Images/magwayen.jpg";
import prelaw from "./Images/prelaw.jpg";
import santelmo from "./Images/santelmo.jpg";
import tugon from "./Images/tugon.jpg";

export const texts = [
  {
    content:
      "Pamantasan ng Lungsod ng Maynila (PLM) is the first and only chartered and autonomous university funded by a city government. It was created by the Congress of the Philippines by virtue of Republic Act No. 4196 or “An Act Authorizing the City of Manila to Establish and Operate the University of City of Manila” on June 19, 1965.",
  },
  {
    content:
      "The university first opened its gates on July 17, 1967 to 556 first-year students at its campus in the historic Intramuros district, which served as the seat of power during the Spanish occupation. Currently, about 10,000 graduate and post-graduate students grace its halls to receive PLM’s quality education.",
  },
  {
    content:
      "PLM is the first local government-funded tertiary institution that offered tuition-free education. PLM also carries the distinction of being the first tertiary institution to have a Filipino official name, which is why people use “Pamantasan” to refer to PLM. The word pamantasan was derived from the Filipino term “pantas” or wise person.",
  },
  {
    content:
      "The university stands on historic grounds. On its site once stood the Universidad de San Ignacio (1590-1798), Universidad Maximo de San Ignacio, Colegio de San Jose, and Ateneo de Municipal de Manila (1865-1901).",
  },
  {
    content:
      "PLM is a premiere university that has consistently garnered a 100% passing rate in licensure exams. Since 1967, it has produced competent and socially responsible graduates who have contributed to nation-building.",
  },
];

export const links = [
  {
    label: "Student Manual",
    link: "/student-manual",
    component: StudentManual,
    order: 1,
  },
  {
    label: "Tuition and Other Fees",
    link: "/tuition",
    component: Tuition,
    order: 1,
  },
  {
    label: "Student Services",
    link: "/student-services",
    component: StudentServices,
    order: 1,
  },
  {
    label: "National Training Service Program", 
    link: "/national-training-service-program", 
    component: NSTP,
    order: 1,
  },
  {
    label: "Student Council",
    link: "/student-council",
    component: SC,
    order: 1,
  },
  {
    label: "Student Organization",
    link: "/student-organization",
    component: SO,
    order: 1,
  },
  {
    label: "Student's Faculty Evaluation System",
    link: "/students-faculty-evalutation-system",
    component: SFE,
    order: 1,
  },
  {
    label: "Computerized Registration System",
    link: "/computerized-registration-system",
    component: CRS,
    order: 1,
  },
  
];

export const orgs = [
  { name: "cradle", image: cradle },
  { name: "css", image: css },
  { name: "ecess", image: ecess },
  { name: "gdsc", image: gdsc },
  { name: "it", image: it },
  { name: "magwayen", image: magwayen },
  { name: "prelaw", image: prelaw },
  { name: "santelmo", image: santelmo },
  { name: "tugon", image: tugon },
];

export const accordionItems = [
  {
    value: "PLM Business School Student Council",
    title: "PLM Business School Student Council",
    content: [
      {
        text: "Phone: 0917 503 1785",
      },
      {
        text: "Email: plm.cbgm@gmail.com",
      },
      {
        text: "Facebook: https://www.facebook.com/PLMBSSC",
      },
    ],
  },
  {
    value: "College of Architecture and Urban Planning Student Council",
    title: "College of Architecture and Urban Planning Student Council",
    content: [
      {
        text: "Phone: 0919 563 2274",
      },
      {
        text: "Email: caupscofficial@gmail.com",
      },
      {
        text: "Facebook: https://www.facebook.com/CAUPStudentCouncil/",
      },
    ],
  },
  {
    value: "PLM College of Medicine Student Council",
    title: "PLM College of Medicine Student Council",
    content: [
      {
        text: "Email: plm.cmsc@gmail.com",
      },
      {
        text: "Facebook: https://www.facebook.com/plm.medisina",
      },
    ],
  },
  {
    value: "PLM College of Nursing Student Council",
    title: "PLM College of Nursing Student Council",
    content: [
      {
        text: "Phone: 0927 879 0466",
      },
      {
        text: "Email: plmcnsc@gmail.com",
      },
      {
        text: "Facebook: https://www.facebook.com/plmcnsc/",
      },
    ],
  },
  {
    value: "PLM College of Science Student Council",
    title: "PLM College of Science Student Council",
    content: [
      {
        text: "Email: csscplm@gmail.com",
      },
      {
        text: "Facebook: https://www.facebook.com/CSsharks",
      },
    ],
  },
  {
    value: "PLM COllege of Humanities, Arts, and Social Sciences Student Council",
    title: "PLM COllege of Humanities, Arts, and Social Sciences Student Council",
    content: [
      {
        text: "Phone: 0905 588 6224",
      },
      {
        text: "Email: chassscplm@gmail.com",
      },
      {
        text: "Facebook: https://www.facebook.com/plmchasssc",
      },
    ],
  },
];