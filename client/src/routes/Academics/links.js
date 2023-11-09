import CAUPimg from "./Images/CAUP.png";
import CEDimg from "./Images/CED.png";
import CHASSimg from "./Images/CHASS.png";
import CLimg from "./Images/CL.png";
import CMimg from "./Images/CM.png";
import CNimg from "./Images/CN.png";
import COEimg from "./Images/COE.png";
import CPTimg from "./Images/CPT.png";
import CSimg from "./Images/CS.png";
import GSLimg from "./Images/GSL.png";
import PHimg from "./Images/PH.png";
import PLMBSimg from "./Images/PLMBS.png";
import SGimg from "./Images/SG.png";

import Overview from "./Overview";
import Colleges from "./Colleges";
import Calendar from "./Calendar";
import CRS from "./CRS";
import CAUP from "./CollegesLinks/CAUP";
import PLMBS from "./CollegesLinks/PLMBS";
import CED from "./CollegesLinks/CED";
import COE from "./CollegesLinks/COE";
import CHASS from "./CollegesLinks/CHASS";
import CN from "./CollegesLinks/CN";
import PT from "./CollegesLinks/PT";
import CS from "./CollegesLinks/CS";
import CL from "./CollegesLinks/CL";
import GSL from "./CollegesLinks/GSL";
import CM from "./CollegesLinks/CM";
import SG from "./CollegesLinks/SG";
import PH from "./CollegesLinks/PH";

export const texts = [
  {
    content:
      "The different colleges of the University offer academic programs based on the curricula proposed by the faculty in consultation with the business or industry engaged in the particular field or study. Usually, the programs require the teaching of the courses of study by leaders in the business or industry and the conduct of field trips in the fields of operation. The participative involvement of practitioners in the formation of the courses of study in the different colleges is reflected in the skills-oriented, community-directed and value driven curricular programs of the University.",
  },
  {
    content:
      "The different colleges of the University offer academic programs based on the curricula proposed by the faculty in consultation with the business or industry engaged in the particular field or study. Usually, the programs require the teaching of the courses of study by leaders in the business or industry and the conduct of field trips in the fields of operation. The participative involvement of practitioners in the formation of the courses of study in the different colleges is reflected in the skills-oriented, community-directed and value-driven curricular programs of the University.",
  },
  {
    content:
      "Until SY 2008-2009, PLM offers a general education program during the first year of college work. All freshmen enrol in common track of preparatory courses leading to the choice of an academic degree program by the student after the evaluation of his/her academic standing for one year. The student's academic performance serves as the basis for his/her acceptance to the specific college where the degree is offered.",
  },
  {
    content:
      "The effectiveness of the degree programs of the University and their responsiveness to the needs of the industry can be gauged through the technical competence and intellectual probity of its graduates. The lasting legacy of these courses to the transformation and the development of the city of Manila, of our country and ultimately of our planet into a better place to live in is measured by how well the graduates could properly carve a recognizable niche in the corporate world, socio-civic and community programs, or public affairs in the exact deportment expected of a PLM-nurtured graduate -- that is, fermented through the ethos of discipline and the moral foundations of ethics.",
  },
  {
    content:
      "While all institutions of higher learning would lay claim of having imbibed their graduates with the needed competencies on their respective fields of learning, the PLM likewise enjoys a modest claim on an evident extended value of imbued human philosophy of discipline -- an exemplary and ideal manifestation of its unwavering commitment to its vision 'as a caring people's university.'",
  },
  {
    content:
      'The value-driven nature of the curricular programs is deeply anchored as well in the Life Purpose of the University, which is to "educate and serve the less-privileged but deserving students of Manila." As it is, there can be no truer words that can be crafted than the aphorism: "The heart of good education is the education of the heart." The university could not stand on its feet any second longer when its Life Purpose is sniffed off its worthy pedestal.',
  },
  {
    content:
      "Guided by this Life Purpose, and inspired by the Vision, the PLM community primarily commits itself 'to provide quality education to the less privileged but deserving students and develop competent, productive, morally upright professionals, effective transformational leaders and socially responsible citizens.'",
  },
  {
    content:
      "Pamantasan does not only give premium and importance to the development of the talents and skills of the citizens where it is located. It values with equal importance the intellectual maturity of every human person. Intellectual maturity rests on the premise that values and ethics are the very foundations of humanity, of being human, that set him apart from other creations, as prerequisites for the development of a total person.",
  },
  {
    content:
      "Such is the philosophy of Pamantasan education, an education of the heart and of the spirit on top of the education of the mind. Such is the legacy of the Pamantasan culture nurtured through the uprightness of human philosophies. Such is the salient reason for the existence of Pamantasan, without which, it has no leg to stand on and would be reduced into oblivion. These are the very reasons for the continuing success of Pamantasan, the wisdom behind the unprecedented success of a 'true class of Filipino education.'",
  },
];

export const colleges = [
  { name: "CAUP", image: CAUPimg },
  { name: "PLMBS", image: PLMBSimg },
  { name: "CED", image: CEDimg },
  { name: "COE", image: COEimg },
  { name: "CHASS", image: CHASSimg },
  { name: "CN", image: CNimg },
  { name: "CPT", image: CPTimg },
  { name: "CS", image: CSimg },
  { name: "CL", image: CLimg },
  { name: "GSL", image: GSLimg },
  { name: "CM", image: CMimg },
  { name: "SG", image: SGimg },
  { name: "PH", image: PHimg },
];

export const links = [
  {
    label: "Academic Overview",
    link: "/academic-overview",
    component: Overview,
    order: 1,
  },
  {
    label: "Colleges",
    link: "/colleges",
    component: Colleges,
    order: 1,
    subLinks: [
      {
        label: "Architecture and Urban Planning",
        link: "/caup",
        component: CAUP,
      },
      { label: "PLM Business School", link: "/plmbs", component: PLMBS },
      { label: "Education", link: "/ced", component: CED },
      { label: "Engineering", link: "/coe", component: COE },
      {
        label: "Humanities, Arts and Social Sciences",
        link: "/chass",
        component: CHASS,
      },
      { label: "College of Nursing", link: "/cn", component: CN },
      { label: "Physical Therapy", link: "/cpt", component: PT },
      { label: "College of Science", link: "/cs", component: CS },
      { label: "College of Law", link: "/cl", component: CL },
      { label: "Graduate School of Law", link: "gsl", component: GSL },
      { label: "College of Medicine", link: "/cm", component: CM },
      { label: "School of Government", link: "/sg", component: SG },
      { label: "School of Public Health", link: "/sph", component: PH },
    ],
  },
  {
    label: "Academic Calendar",
    link: "/calendar",
    component: Calendar,
    order: 1,
  },
  {
    label: "Computer Registration System",
    link: "/crs",
    component: CRS,
    order: 1,
  },
];

export const timelineItems = [
  {
    title: "JUNE 2001",
    content:
      "In June of 2001, the College of Architecture and Urban Planning (CAUP) was established to help transform the City of Manila back into a vibrant, world-class tourist destination.",
  },
  {
    title: "ESTABLISHMENT OF COLLEGE",
    content:
      "Before the establishment of the college, Bachelor of Science in Architecture was offered under the College of Engineering and Architecture. The course was first offered by the university in 1987.",
  },
  {
    title: "ORIENTATION",
    content:
      "Training in the College of Architecture and Urban Planning is more like a job than studying. Given this orientation, the College has earned the trust and confidence of its peers and leaders. The architecture program continues to relish in its own place within the university. The College prides itself of reaping numerous honors and citations for PLM, both in local and national arena. These achievements are the result of a strong partnership built around team spirit unique in PLM.",
  },
  {
    title: "BOARD TOPNOTCHER",
    content:
      "The college has board topnotchers in its roster. They are Arch. Lili-Anne Reyes, topnotcher, August 2019 Special Professional Licensure Exam (SPLE); Arch. Marlou B. Campaner, topnotcher, June 1998 board exam; Arch. Aldous Y. Olbes, top 2, June 2017 board exam; Arch. Michael Raye M. Tadeo, top 4, January 2018 board exam; and Arch. Alnie Khayzer P. Hayudini, top 10, January 2016 board exam.",
  },
];
export const accordionItems = [
  {
    value: "Undergraduate Program",
    title: "Undergraduate Program",
    content: "Bachelor of Science in Architecture",
  },
  {
    value: "Governing Spirit",
    title: "Governing Spirit",
    content: [
      "Creation of an immediate evaluation platform focusing on industry-driven variables",
      "Establishment of a research-oriented mentorship practices highly adaptable to young but inquisitive minds",
      "Adoption of a consultative planning policy discernable to industry-based professionals and dynamic academic partners",
    ],
  },
  {
    value: "Graduate",
    title: "Graduate Do Matter",
    content:
      "Although quite a small college, its graduates really do matter. Architecture, many would like to believe, is a career reserved only for the rich. PLM proved them wrong and until this day, the famous Intramuros refuge for Manila's poor has maintained a reputation of academic dominance and excellence in higher education. With almost 100% of its graduates passing the licensure examinations, the college plays a major role in transforming old Manila into a network of micro-communities, planning satellite activity centers in pocket parks and idle open spaces, as well as establishing a blue print of maximum tolerable dwelling patterns in congested barangays in the City. Other placers would soon follow the likes of Architects Ricardo A. Reyes and Patrick N. Rodriguez. In the June 2005 Board Exam for Architecture, PLM was ranked 4th out of 60 architecture schools nationwide with Marc Rhojel C. Cortez placing 5th in the top ten column of successful examinees. January 2007 produced another board topnotcher in Rafael Banaag III (9th place) with 81% passing rate against a national rate of 36%. As of October 2008, a total of 405 student spread into seventeen (17) batches, or an average of 23.8 students per year, graduated from the program. The first group of 10 graduates completed the program in 1992. Two years after (PRC requires that a graduate prior to taking a board exam has to undergo a 2-year diversified industry exposure), PLM produced its first Architect led by Architect Antonio G. Sevilla Jr. who maintains a very successful Architect's Consultancy and Construction Services Office. Based on the records of the Professional Regulations Commision (PRC), PLM has sustained a record of consistently good performance in as far as the percentage of candidates passing the board exam. Back in 1998, Mr. Marlou B. Campaner, a 1996 graduate whose mother works as a casual employee at the Manila City Hall and whose father labors the road of the city with his tricycle topped that year's June Examination. Placing 1st among the more than 1000 examinees was a solid proof that PLM can easily dominate any arena given an equal chance. Architect Campaner is now among the leading lights in the City Planning and Development Office of the City of Manila.",
  },
];

export const CaupBusinessCardData = {
  collegeName: " COLLEGE OF ARCHITECTURE AND URBAN PLANNING",
  deanName: "Arch. Jared Aaron R. Cruz",
  deanTitle: "Dean, College of Architecture and Urban Planning",
  contactInfo: {
    text: "We'd love to hear from you! Please feel free to contact us with any questions.",
    location: {
      title: "Office Location",
      text: "(Location of the Building)",
    },
    email: {
      title: "Email",
      text: "plmbsgroup@plm.edu.ph",
    },
    phone: {
      title: "Contact Numbers",
      text: "(+63) 000-000-0000",
    },
  },
};
