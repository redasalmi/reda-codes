export const projectsData = [
  {
    key: 'khedemni',
    title: 'Khedemni',
    owner: 'Buileo',
    ownerLink: 'https://www.buileo.com/',
    desc: 'A recruitment web application specialized in the fields of hostelry and restoration where companies can post job offers. I made all the frontend for this application.',
    techStack: ['React', 'Redux', 'Bootstrap'],
    img: 'images/khedemni.webp',
    imgAlt: 'khedemni, a recruitment website',
    link: 'https://khedemni.com/',
  },
  {
    key: 'caronline',
    title: 'Caronline',
    owner: 'Buileo',
    ownerLink: 'https://www.buileo.com/',
    desc: 'A car rental web application, that proposes to rent a car with or without a driver for a giving period of time. I made all the frontend and a part of the backend for this application.',
    techStack: ['React', 'Redux', 'Bootstrap', 'Symfony'],
    img: 'images/caronline.webp',
    imgAlt: 'caronline, a car rental website',
    link: 'https://caronline-dz.buileo.com/',
  },
  {
    key: 'json-placeholder',
    title: '{JSON} Placeholder - GraphQL',
    desc: 'A GraphQL API for testing, learning or prototyping with GraphQL. This app is heavily inspired by the {JSON} Placeholder project and proposes a graphql alternative.',
    techStack: ['Express', 'Express-graphql', 'GraphQL'],
    img: 'images/json-placeholder.webp',
    imgAlt: 'json placeholder graphql, a graphql prototyping and testing API',
    link: 'https://jsonplaceholdergraphql.herokuapp.com/',
    code: 'https://github.com/redasalmi/jsonplaceholder-graphql',
  },
  {
    key: 'it-books',
    title: 'IT Books',
    desc: "A web site to search for it books using the 'IT Bookstore API', this is my personal playground where I test different libraries and frameworks.",
    techStack: ['Typescript', 'React', 'Remix', 'PostCSS'],
    img: 'images/it-books.webp',
    imgAlt: 'it books, an IT books website',
    link: 'https://itbooks-remix.netlify.app/',
    code: 'https://github.com/redasalmi/it-books-remix',
  },
];

export const projectVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    boxShadow: '0px 2px 12px var(--project-shadow)',
  },
};

export const projectFirstVariant = {
  hide: { x: -120 },
  show: { x: 0 },
};

export const projectLastVariant = {
  hide: { x: 120 },
  show: { x: 0 },
};
