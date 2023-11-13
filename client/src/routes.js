// This are all the routes of this system. I put them all here to make the code more readable in app.jsx.
import { lazy } from "react";

const Home = lazy(() => import("./routes/Home"));
const AboutShell = lazy(() => import("./routes/About/AboutShell"));
const Administration = lazy(() => import("./routes/About/Administration"));
const Contact = lazy(() => import("./routes/About/Contact"));
const OBE = lazy(() => import("./routes/About/OBE"));
const PrideHall = lazy(() => import("./routes/About/PrideHall"));
const UniversityProfile = lazy(() =>
  import("./routes/About/UniversityProfile")
);
const AcademicsShell = lazy(() => import("./routes/Academics/AcademicsShell"));
// const Overview = lazy(() => import("./Academics/Overview"));
// const Calendar = lazy(() => import("./Academics/Calendar"));
// const Colleges = lazy(() => import("./Academics/Colleges"));
// const CRS = lazy(() => import("./Academics/CRS"));
const CLAT = lazy(() => import("./routes/Admissions/CLAT"));
const MCAT = lazy(() => import("./routes/Admissions/MCAT"));
const PLMAT = lazy(() => import("./routes/Admissions/PLMAT"));
const Scholarship = lazy(() => import("./routes/Admissions/Scholarship"));
const Undegrad = lazy(() => import("./routes/Admissions/Undegrad"));
const Announcements = lazy(() => import("./routes/News/Announcements"));
const Gallery = lazy(() => import("./routes/News/Gallery"));
const Message = lazy(() => import("./routes/News/Message"));
const NewsLetter = lazy(() => import("./routes/News/NewsLetter"));
const PressRelease = lazy(() => import("./routes/News/PressRelease"));
const SpecialReports = lazy(() => import("./routes/News/SpecialReports"));
const Theses = lazy(() => import("./routes/Research/Theses"));
const Downloads = lazy(() => import("./routes/Downloads"));
const Students = lazy(() => import("./routes/OtherLinks/Students"));
const Faculty = lazy(() => import("./routes/OtherLinks/Faculty"));
const Alumni = lazy(() => import("./routes/OtherLinks/Alumni"));
const Partners = lazy(() => import("./routes/OtherLinks/Partners"));
const Community = lazy(() => import("./routes/OtherLinks/Community"));
const PLMEmail = lazy(() => import("./routes/OtherLinks/PLMEmail"));
const ContactUs = lazy(() => import("./routes/FooterRoutes/ContactUs"));
const Careers = lazy(() => import("./routes/FooterRoutes/Careers"));
const Procurement = lazy(() => import("./routes/FooterRoutes/Procurement"));
const UniversityMap = lazy(() => import("./routes/FooterRoutes/UniversityMap"));
const SiteGuide = lazy(() => import("./routes/FooterRoutes/SiteGuide"));
const PrivacyPolicy = lazy(() => import("./routes/FooterRoutes/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./routes/FooterRoutes/TermsOfUse"));
const CitizensCharter = lazy(() =>
  import("./routes/FooterRoutes/CitizensCharter")
);
const Archive = lazy(() => import("./routes/Archive"));
const Error = lazy(() => import("./routes/Error"));
const Test = lazy(() => import("./routes/Test"));
const Test2 = lazy(() => import("./routes/Test2"));

export const AllLinks = [
  { component: Home, path: "/" },
  { component: AboutShell, path: "/about" },
  { component: Administration, path: "/about/administration" },
  { component: Contact, path: "/about/contact" },
  { component: OBE, path: "/about/obe" },
  { component: PrideHall, path: "/about/pride-hall" },
  { component: UniversityProfile, path: "/about/university-profile" },
  { component: AcademicsShell, path: "/academics" },
  // { component: Overview, path: "/academics/academic-overview" },
  // { component: Calendar, path: "/academics/calendar" },
  // { component: Colleges, path: "/academics/colleges" },
  // { component: CRS, path: "/academics/crs" },
  { component: CLAT, path: "/admissions/clat" },
  { component: MCAT, path: "/admissions/mcat" },
  { component: PLMAT, path: "/admissions/plmat" },
  { component: Scholarship, path: "/admissions/scholarship-and-financial-aid" },
  { component: Undegrad, path: "/admissions/undegrad-programs" },
  { component: Announcements, path: "/news/announcements" },
  { component: Gallery, path: "/news/gallery" },
  { component: Message, path: "/news/message" },
  { component: NewsLetter, path: "/news/news-letter" },
  { component: PressRelease, path: "/news/press-release" },
  { component: SpecialReports, path: "/news/special-reports" },
  { component: Theses, path: "/research/theses-and-dissertation" },
  { component: Downloads, path: "/downloads" },
  { component: Students, path: "/students" },
  { component: Faculty, path: "/faculty" },
  { component: Alumni, path: "/alumni" },
  { component: Partners, path: "/partners" },
  { component: Community, path: "/community" },
  { component: PLMEmail, path: "/plm-email-login" },
  { component: ContactUs, path: "/contact-us" },
  { component: Careers, path: "/careers" },
  { component: Procurement, path: "/procurement" },
  { component: UniversityMap, path: "/university-map" },
  { component: SiteGuide, path: "/site-guide" },
  { component: PrivacyPolicy, path: "/privacy-policy" },
  { component: TermsOfUse, path: "/terms-of-use" },
  { component: CitizensCharter, path: "/citizens-charter" },
  { component: Archive, path: "/archive" },
  { component: Error, path: "/error" },
  { component: Test, path: "/test" },
  { component: Test2, path: "/test2" },
];
