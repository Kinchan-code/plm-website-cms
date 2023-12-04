import Campus from "./Campus";
import Events from "./Events";
import IV from "./IV";
import Sports from "./Sports";

export const links = [
    {
      label: "Campus",
      link: "/campus",
      component: Campus,
      order: 1,
    },
    {
      label: "Events",
      link: "/events",
      component: Events,
      order: 1,
    },
    {
        label: "Sports (ALCU Games)", 
        link: "/sports", 
        component: Sports,
        order: 1,
    },
    {
      label: "Immigrant and Visa",
      link: "/immigrant-and-visa",
      component: IV,
      order: 1,
    },
  ];


  export const accordionItems = [
    {
      value: "Supporting Documents",
      title: "Supporting Documents",
      content: [
        {
          text: "Tab “A”: Original letter requesting for issuance of appropriate visa as indicated in number 1 above;",
        },
        {
          text: "Tab “B”: Completely filled out Visa Application Form;",
        },
        {
          text: "Tab “C”: Original and photocopy of acceptance letter from the university or learning institution, with required attachments as indicated in number 3 below;",
        },
        {
          text: "Tab “D”: Proof of payment of tuition as indicated in number 4 below;",
        },
        {
            text: "Tab “E”: Original and photocopy of Certificate of Eligibility for Admission from the Commission on Higher Education (CHED), duly authenticated by the Department of Foreign Affairs in Manila, for students pursuing Medicine or Dentistry. Leave this tab blank when it is not applicable;",
        },
        {
            text: "Tab “F”: Original and photocopy of Affidavit of Support and Consent duly notarized and authenticated by your country's ministry of external or foreign affairs, with attachments as indicated in number 5 below (the attachments need not be photocopied); and",
        },
        {
            text: "Tab “G”: Copy of return air ticket.",
        },
      ],
    },
  ];