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

// Awards
// newsLinks
export const newsLinks = [
  {
    id: 1,
    published: "29 October 2020",
    title: "NOTICE OF AWARD: HUMIL INTERNATIONAL CORPORATION",
  },
  {
    id: 2,
    published: "29 October 2020",
    title: "NOTICE OF AWARD: ADVANCE MICROSYSTEMS CORPORATION",
  },
  {
    id: 3,
    published: "26 October 2020",
    title: "NOTICE OF AWARD: PLDT, INC.",
  },
  {
    id: 4,
    published: "22 October 2020",
    title: "NOTICE OF AWARD: HYTEC POWER. INC..",
  },
  {
    id: 5,
    published: "28 August 2020",
    title: "NOTICE OF AWARD: OMNIBUS BIO- MEDICAL SYSTEMS INC.",
  },
  {
    id: 6,
    published: "28 August 2020",
    title: "NOTICE OF AWARD: INNOVATIVE CONCEPT MARKETING",
  },
  {
    id: 7,
    published: "27 January 2020",
    title: "PLM COLLEGE OF LAW HONORS SC JUSTICE GAERLAN, OUTSTANDING FACULTY",
  },
];

// Board Exam Passers
// BOP news links
export const bopNewsLinks = [
  {
    id: 1,
    published: "23 August 2022",
    title: "PLM LOGS 61.54% PASSING RATE IN MECHANICAL ENGINEERING BOARD EXAM",
  },
  {
    id: 2,
    published: "12 May 2022",
    title: "PLM CONGRATULATES 22 NEW CIVIL ENGINEERS, 6 ELECTRICAL ENGINEERS",
  },
  {
    id: 3,
    published: "19 January 2022",
    title: "PLM CONGRATULATES 8 NEW CERTIFIED PUBLIC ACCOUNTANTS",
  },
  {
    id: 4,
    published: "11 December 2021",
    title:
      "PLM NURSING GRADS TOP NOVEMBER 2021 LICENSURE EXAM, 100% PASSING RATE ACHIEVED",
  },
  {
    id: 5,
    published: "11 November 2021",
    title: "PLM TOPS PHYSICIAN LICENSURE EXAM, ALMNUS LANDS 5TH PLACE",
  },
  {
    id: 6,
    published: "12 October 2021",
    title: "PLM MARKS 87.5% PASSING RATE IN CHEMICAL ENGINEER LICENSURE EXAM",
  },
  {
    id: 7,
    published: "20 March 2021",
    title: "PLM CONGRATULATES 15 NEW MEDICAL DOCTORS",
  },
];

// Contact
// Contact Table Column
// administrative office
export const administrativeTable = [
  { key: "office", header: "OFFICE" },
  {
    key: "email",
    header: "CONTACT DETAILS",
  },
];

// administrative office
export const administrativeElements = [
  {
    office: "Office of the Executive President",
    email: ["oevp@plm.edu.ph"],
  },
  {
    office: "Office of the Senior Vice President of Academic Affairs",
    email: ["svpaa@plm.edu.ph"],
  },
  {
    office: "Office of the Vice President for Academic Support Units",
    email: ["vpasu@plm.edu.ph"],
  },
  {
    office: "Office of the University Legal Counsel",
    email: ["oulc@plm.edu.ph"],
  },
  {
    office: "Office of the Vice President for Information and Communications",
    email: ["vpict@plm.edu.ph"],
  },
  {
    office: "Office of the Vice President of Administration",
    email: ["vpa@plm.edu.ph"],
  },
  {
    office: "Office of the Vice President for Finance and Management",
    email: ["ovpfm@plm.edu.ph"],
  },
  {
    office: "Cash Office / Treasurer’s Office",
    email: ["to@plm.edu.ph", "0916 341 0322"],
  },
  {
    office: "Budget Office",
    email: ["budget@plm.edu.ph"],
  },
  {
    office: "Internal Audit",
    email: ["iao@plm.edu.ph"],
  },
  {
    office: "Information and Communications Technology Office",
    email: ["ithelp@plm.edu.ph"],
  },
  {
    office: "Office of Public Affairs",
    email: ["ovppa@plm.edu.ph"],
  },
  {
    office: "Office of Guidance and Testing Services",
    email: ["ogts@plm.edu.ph"],
  },
  {
    office: "Office of Student and Development Services",
    email: ["osds@plm.edu.ph"],
  },
  {
    office: "University Library",
    email: ["library@plm.edu.ph"],
  },
  {
    office: "University Center for Research and Extension Services",
    email: ["ucres@plm.edu.ph"],
  },
  {
    office: "University Health Services",
    email: ["uhs@plm.edu.ph"],
  },
  {
    office: "National Service Training Program",
    email: ["nstp@plm.edu.ph"],
  },
  {
    office: "Human Resouce Development Office",
    email: ["hrdo@plm.edu.ph"],
  },
  {
    office: "Procurement Office",
    email: ["procurement@plm.edu.ph"],
  },
  {
    office: "Property and Supplies Office",
    email: ["pso@plm.edu.ph"],
  },
  {
    office: "Physical Facilities Management Office",
    email: ["pfmo@plm.edu.ph"],
  },
  {
    office: "University Security Office",
    email: ["uso@plm.edu.ph"],
  },
];

// colleges
export const collegesTable = [
  { key: "office", header: "OFFICE" },
  {
    key: "email",
    header: "CONTACT DETAILS",
  },
];

// colleges
export const collegesElements = [
  {
    office: "College of Architecture and Urban Planning",
    email: ["caupgroup@plm.edu.ph"],
  },
  {
    office: "College of Engineering and Technology",
    email: ["cet_group@plm.edu.ph"],
  },
  {
    office: "College of Education",
    email: ["cedgroup@plm.edu.ph"],
  },
  {
    office: "College of Humanities, Arts, and Social Science",
    email: ["chassgroup@plm.edu.ph"],
  },
  {
    office: "College of Nursing ",
    email: ["cngroup@plm.edu.ph"],
  },
  {
    office: "College of Physical Therapy",
    email: ["cptgroup@plm.edu.ph"],
  },
  {
    office: "College of Science",
    email: ["csgroup@plm.edu.ph"],
  },
  {
    office: "College of Law",
    email: ["clgroup@plm.edu.ph"],
  },
  {
    office: "College of Medicine",
    email: ["cmgroup@plm.edu.ph"],
  },
  {
    office: "PLM Business School",
    email: ["plmbsgroup@plm.edu.ph"],
  },
  {
    office: "Graduate School of Law",
    email: ["gslgroup@plm.edu.ph"],
  },
  {
    office: "School of Public Health",
    email: ["sophgroup@plm.edu.ph"],
  },
  {
    office: "School of Government",
    email: ["soggroup@plm.edu.ph"],
  },
];

// offices
export const officesTable = [
  { key: "office", header: "OFFICE" },
  {
    key: "email",
    header: "CONTACT DETAILS",
  },
];

// offices
export const officesElements = [
  {
    office: "Board of Regents",
    email: ["plmbor@plm.edu.ph"],
  },
  {
    office: "Office of the President",
    email: ["op_ces@plm.edu.ph", "(20) 8568 7027"],
  },
  {
    office: "Office of the University Registrar",
    email: ["registrar@plm.edu.ph", "0916 341 0311"],
  },
  {
    office: "Admissions Office",
    achievements: ["admission_office@plm.edu.ph", "0916 341 0332"],
  },
];
