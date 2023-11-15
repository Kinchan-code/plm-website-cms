import AcadThrusts from "./UnivProfileLinks/AcadThrusts";
import Facilities from "./UnivProfileLinks/Facilities";
import History from "./UnivProfileLinks/History";
import SealAndSymbols from "./UnivProfileLinks/SealAndSymbols";
import UnivCharter from "./UnivProfileLinks/UnivCharter";
import UnivCode from "./UnivProfileLinks/UnivCode";
import UnivHymn from "./UnivProfileLinks/UnivHymn";
import UnivMap from "./UnivProfileLinks/UnivMap";
import VM from "./UnivProfileLinks/VM";
import OBE from "./OBE";
import Administration from "./Administration";
import BoardOfRegents from "./AdminLinks/BoardOfRegents";
import Deans from "./AdminLinks/Deans";
import DirectorsAndChiefs from "./AdminLinks/DirectorsAndChiefs";
import OrgChart from "./AdminLinks/OrgChart";
import PresidentialSupportStaff from "./AdminLinks/PresidentialSupportStaff";
import ThePresident from "./AdminLinks/ThePresident";
import VPAndAVP from "./AdminLinks/VPAndAVP";
import PrideHall from "./PrideHall";
import Awards from "./PrideHallLinks/Awards";
import BEP from "./PrideHallLinks/BEP";
import Contact from "./Contact";
import UniversityProfile from "./UniversityProfile";

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
    label: "University Profile",
    link: "/university-profile",
    component: UniversityProfile,
    order: 1,
    subLinks: [
      {
        label: "Vision and Mission",
        link: "/vision-and-mission",
        component: VM,
      },
      {
        label: "Seal and Symbols",
        link: "/seal-and-symbols",
        component: SealAndSymbols,
      },
      { label: "History", link: "/history", component: History },
      {
        label: "University Hymn",
        link: "/university-hymn",
        component: UnivHymn,
      },
      {
        label: "University Charter",
        link: "/university-charter",
        component: UnivCharter,
      },
      {
        label: "University Code",
        link: "/university-code",
        component: UnivCode,
      },
      { label: "University Map", link: "/university-map", component: UnivMap },
      {
        label: "Academic Thrusts",
        link: "/academic-thrusts",
        component: AcadThrusts,
      },
      { label: "Facilities", link: "/facilities", component: Facilities },
    ],
  },
  {
    label: "Outcomes-Based Education (OBE)",
    link: "/obe",
    component: OBE,
    order: 1,
  },
  {
    label: "Administration",
    link: "/administration",
    component: Administration,
    order: 1,
    subLinks: [
      {
        label: "Board of Regents",
        link: "/board-of-regents",
        component: BoardOfRegents,
      },
      {
        label: "The President",
        link: "/the-president",
        component: ThePresident,
      },
      {
        label: "Vice President and Assistant Vice President",
        link: "/vice-president-and-assistant-vice-president",
        component: VPAndAVP,
      },
      {
        label: "Directors and Chiefs",
        link: "/directors-and-chiefs",
        component: DirectorsAndChiefs,
      },
      {
        label: "Deans",
        link: "/deans",
        component: Deans,
      },
      {
        label: "Organizational Chart",
        link: "/organizational-chart",
        component: OrgChart,
      },
      {
        label: "Presidential Support Staff",
        link: "/presidential-support-staff",
        component: PresidentialSupportStaff,
      },
    ],
  },
  {
    label: "Pride Hall",
    link: "/pride-hall",
    component: PrideHall,
    order: 1,
    subLinks: [
      {
        label: "Board Exam Passers",
        link: "/board-exam-passers",
        component: BEP,
      },
      { label: "Awards", link: "/awards", component: Awards },
    ],
  },
  {
    label: "Contacts",
    link: "/contacts",
    component: Contact,
    order: 1,
  },
];
