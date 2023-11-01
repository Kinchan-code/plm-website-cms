// export { default as Home } from "./Home";
// export { default as Administration } from "./About/Administration";
// export { default as Contact } from "./About/Contact";
// export { default as OBE } from "./About/OBE";
// export { default as PrideHall } from "./About/PrideHall";
// export { default as UniversityProfile } from "./About/UniversityProfile";
// export { default as Calendar } from "./Academics/Calendar";
// export { default as Colleges } from "./Academics/Colleges";
// export { default as CRS } from "./Academics/CRS";
// export { default as CLAT } from "./Admissions/CLAT";
// export { default as MCAT } from "./Admissions/MCAT";
// export { default as PLMAT } from "./Admissions/PLMAT";
// export { default as Scholarship } from "./Admissions/Scholarship";
// export { default as Undergrad } from "./Admissions/Undegrad";
// export { default as Announcements } from "./News/Announcements";
// export { default as Gallery } from "./News/Gallery";
// export { default as Message } from "./News/Message";
// export { default as NewsLetter } from "./News/NewsLetter";
// export { default as PressRelease } from "./News/PressRelease";
// export { default as SpecialReports } from "./News/SpecialReports";
// export { default as Theses } from "./Research/Theses";
// export { default as Students } from "./OtherLinks/Students";
// export { default as Faculty } from "./OtherLinks/Faculty";
// export { default as Alumni } from "./OtherLinks/Alumni";
// export { default as Partners } from "./OtherLinks/Partners";
// export { default as Community } from "./OtherLinks/Community";
// export { default as PLMEmail } from "./OtherLinks/PLMEmail";
// export { default as Archive } from "./Archive";
// export { default as Error } from "./Error";
// export { default as Test } from "./Test";
// export { default as Test2 } from "./Test2";

import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Administration = lazy(() => import("./About/Administration"));
const Contact = lazy(() => import("./About/Contact"));
const OBE = lazy(() => import("./About/OBE"));
const PrideHall = lazy(() => import("./About/PrideHall"));
const UniversityProfile = lazy(() => import("./About/UniversityProfile"));
const Calendar = lazy(() => import("./Academics/Calendar"));
const Colleges = lazy(() => import("./Academics/Colleges"));
const CRS = lazy(() => import("./Academics/CRS"));
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
const Students = lazy(() => import("./OtherLinks/Students"));
const Faculty = lazy(() => import("./OtherLinks/Faculty"));
const Alumni = lazy(() => import("./OtherLinks/Alumni"));
const Partners = lazy(() => import("./OtherLinks/Partners"));
const Community = lazy(() => import("./OtherLinks/Community"));
const PLMEmail = lazy(() => import("./OtherLinks/PLMEmail"));
const Archive = lazy(() => import("./Archive"));
const Error = lazy(() => import("./Error"));
const Test = lazy(() => import("./Test"));
const Test2 = lazy(() => import("./Test2"));

export const AllLinks = [
  { component: Home, path: "/" },
  { component: Administration, path: "/administration" },
  { component: Contact, path: "/contact" },
  { component: OBE, path: "/obe" },
  { component: PrideHall, path: "/pride-hall" },
  { component: UniversityProfile, path: "/university-profile" },
  { component: Calendar, path: "/calendar" },
  { component: Colleges, path: "/colleges" },
  { component: CRS, path: "/crs" },
  { component: CLAT, path: "/clat" },
  { component: MCAT, path: "/mcat" },
  { component: PLMAT, path: "/plmat" },
  { component: Scholarship, path: "/scholarship-and-financial-aid" },
  { component: Undegrad, path: "/undegrad-programs" },
  { component: Announcements, path: "/announcements" },
  { component: Gallery, path: "/gallery" },
  { component: Message, path: "/message" },
  { component: NewsLetter, path: "/news-letter" },
  { component: PressRelease, path: "/press-release" },
  { component: SpecialReports, path: "/special-reports" },
  { component: Theses, path: "/theses-and-dissertation" },
  { component: Students, path: "/students" },
  { component: Faculty, path: "/faculty" },
  { component: Alumni, path: "/alumni" },
  { component: Partners, path: "/partners" },
  { component: Community, path: "/community" },
  { component: PLMEmail, path: "/plm-email-login" },
  { component: Archive, path: "/archive" },
  { component: Error, path: "/error" },
  { component: Test, path: "/test" },
  { component: Test2, path: "/test2" },
];
