type Experience = {
  title: string;
  company: string;
  date: string;
  description?: string;
};

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "The Codest",
    date: "2022—PRESENT",
    description:
      "Delivered Shopify migrations, cart and subscription rewrites, advanced PDP features, custom apps, and checkout extensions for international brands.",
  },
  {
    title: "Full Stack Developer",
    company: "ImaginePartners",
    date: "2020—2021",
    description:
      "Contributed to recruitment and food-delivery platforms using React and Next.js across frontend and backend integration.",
  },
  {
    title: "Full Stack Developer",
    company: "EmploiPartner",
    date: "2019—2020",
    description:
      "Built recruitment and car-rental applications with React and Symfony, delivering features across the stack.",
  },
];
