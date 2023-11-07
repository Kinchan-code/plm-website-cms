// This are all the routes of this system. I put them all here to make the code more readable in app.jsx.
import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Administration = lazy(() => import("./About/Administration"));
const Contact = lazy(() => import("./About/Contact"));
const OBE = lazy(() => import("./About/OBE"));
const PrideHall = lazy(() => import("./About/PrideHall"));
const UniversityProfile = lazy(() => import("./About/UniversityProfile"));
const AcademicsShell = lazy(() => import("./Academics/AcademicsShell"));
// const Overview = lazy(() => import("./Academics/Overview"));
// const Calendar = lazy(() => import("./Academics/Calendar"));
// const Colleges = lazy(() => import("./Academics/Colleges"));
// const CRS = lazy(() => import("./Academics/CRS"));
const CLAT = lazy(() => import("./Admissions/CLAT"));
const MCAT = lazy(() => import("./Admissions/MCAT"));
const PLMAT = lazy(() => import("./Admissions/PLMAT"));
const Scholarship = lazy(() => import("./Admissions/Scholarship"));
const Undegrad = lazy(() => import("./Admissions/Undegrad"));
const Announcements = lazy(() => import("./News/Announcements"));
const Gallery = lazy(() => import("./News/Gallery"));
const Message = lazy(() => import("./News/Message"));
const NewsLetter = lazy(() => import("./News/NewsLetter"));
const PressRelease = lazy(() => import("./News/PressRelease"));
const SpecialReports = lazy(() => import("./News/SpecialReports"));
const Theses = lazy(() => import("./Research/Theses"));
const Downloads = lazy(() => import("./Downloads"));
const Students = lazy(() => import("./OtherLinks/Students"));
const Faculty = lazy(() => import("./OtherLinks/Faculty"));
const Alumni = lazy(() => import("./OtherLinks/Alumni"));
const Partners = lazy(() => import("./OtherLinks/Partners"));
const Community = lazy(() => import("./OtherLinks/Community"));
const PLMEmail = lazy(() => import("./OtherLinks/PLMEmail"));
const ContactUs = lazy(() => import("./FooterRoutes/ContactUs"));
const Careers = lazy(() => import("./FooterRoutes/Careers"));
const Procurement = lazy(() => import("./FooterRoutes/Procurement"));
const UniversityMap = lazy(() => import("./FooterRoutes/UniversityMap"));
const SiteGuide = lazy(() => import("./FooterRoutes/SiteGuide"));
const PrivacyPolicy = lazy(() => import("./FooterRoutes/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./FooterRoutes/TermsOfUse"));
const CitizensCharter = lazy(() => import("./FooterRoutes/CitizensCharter"));
const Archive = lazy(() => import("./Archive"));
const Error = lazy(() => import("./Error"));
const Test = lazy(() => import("./Test"));
const Test2 = lazy(() => import("./Test2"));

export const AllLinks = [
  { component: Home, path: "/" },
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
