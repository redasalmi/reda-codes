export interface ProjectData {
  key: string;
  title: string;
  owner?: {
    name: string;
    link: string;
  };
  desc: string;
  techStack: string[];
  img: {
    src: string;
    alt: string;
  };
  link: string;
  code?: string;
}

export const projects: ProjectData[] = [
  {
    key: 'khedemni',
    title: 'Khedemni',
    owner: {
      name: 'Buileo',
      link: 'https://www.buileo.com/',
    },
    desc: 'A recruitment web application specialized in the fields of hostelry and restoration where companies can post job offers. I made all the frontend for this application.',
    techStack: ['React', 'Redux', 'Bootstrap'],
    img: {
      src: 'images/khedemni.webp',
      alt: 'khedemni, a recruitment website',
    },
    link: 'https://khedemni.com/',
  },
  {
    key: 'caronline',
    title: 'Caronline',
    owner: {
      name: 'Buileo',
      link: 'https://www.buileo.com/',
    },
    desc: 'A car rental web application, that proposes to rent a car with or without a driver for a giving period of time. I made all the frontend and a part of the backend for this application.',
    techStack: ['React', 'Redux', 'Bootstrap', 'Symfony'],
    img: {
      src: 'images/caronline.webp',
      alt: 'caronline, a car rental website',
    },
    link: 'https://caronline-dz.buileo.com/',
  },
  {
    key: 'json-placeholder',
    title: '{JSON} Placeholder - GraphQL',
    desc: 'A GraphQL API for testing, learning or prototyping with GraphQL. This app is heavily inspired by the {JSON} Placeholder project and proposes a graphql alternative.',
    techStack: ['Fastify', 'Mercurius', 'Prisma', 'GraphQL'],
    img: {
      src: 'images/json-placeholder.webp',
      alt: 'json placeholder graphql, a graphql prototyping and testing API',
    },
    link: 'https://jsonplaceholder-graphql.onrender.com/',
    code: 'https://github.com/redasalmi/jsonplaceholder-graphql',
  },
  {
    key: 'it-books',
    title: 'IT Books',
    desc: "A web site to search for it books using the 'IT Bookstore API', this is my personal playground where I test different libraries and frameworks.",
    techStack: ['Typescript', 'React', 'Remix', 'PostCSS'],
    img: {
      src: 'images/it-books.webp',
      alt: 'it books, an IT books website',
    },
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
    boxShadow: '0px 2px 12px var(--shadow-primary)',
    transition: {
      opacity: {
        duration: 1.6,
      },
      boxShadow: {
        delay: 1.6,
        duration: 0.4,
      },
    },
  },
};

const show = {
  x: 0,
  transition: {
    duration: 1.6,
  },
};

export const projectFirstVariant = {
  hide: {
    x: -120,
  },
  show,
};

export const projectLastVariant = {
  hide: {
    x: 120,
  },
  show,
};
