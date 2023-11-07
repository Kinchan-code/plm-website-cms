import { lazy } from "react";

const CAUP = lazy(() => import("./CAUP"));
const CED = lazy(() => import("./CED"));
const CHASS = lazy(() => import("./CHASS"));
const CL = lazy(() => import("./CL"));
const CM = lazy(() => import("./CM"));
const CN = lazy(() => import("./CN"));
const COE = lazy(() => import("./COE"));
const CS = lazy(() => import("./CS"));
const GSL = lazy(() => import("./GSL"));
const PH = lazy(() => import("./PH"));
const PLMBS = lazy(() => import("./PLMBS"));
const PT = lazy(() => import("./PT"));
const SG = lazy(() => import("./SG"));

export const AllLinks = [
  { component: CAUP },
  { component: CED },
  { component: CHASS },
  { component: CL },
  { component: CM },
  { component: CN },
  { component: COE },
  { component: CS },
  { component: GSL },
  { component: PH },
  { component: PLMBS },
  { component: PT },
  { component: SG },
];
