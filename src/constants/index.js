import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    uma,
    accenture,
    glofy,
    loopstudio,
    complif,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "UX/UI Design",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Glofy",
      icon: glofy,
      iconBg: "#383E56",
      date: "November 2023 - October 2024",
      points: [
        "Analyzed and fixed performance issues on the app's front-end, optimizing loading times through code refactoring and image compression techniques, leading to an increase in user retention rates.",
        "Contributed to improve a high-performance SPA using React and Redux enhancing user engagement by 20% and improving navigation speed by 30%.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Loopstudio",
      icon: loopstudio,
      iconBg: "#E6DEDD",
      date: "October 2022 – November 2023",
      points: [
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Built and managed web applications using React, Redux and typescript to ensure the best code quality and long term-maintainability.",
        "Developed and deployed user authentication features utilizing JWT-based login, sign up, and password reset functionality.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Complif",
      icon: complif,
      iconBg: "#383E56",
      date: "June 2021 – October 2021",
      points: [
        "Led end-to-end design, development and deployment of an MVP for fintech.",
        "Developed landing page utilizing typescript and React that effectively communicated the product vision.",
        "Played a pivotal role in transforming conceptual ideas into tangible products, contributing to the successful launch of the fi ntech project.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#E6DEDD",
      date: "November 2021 – August 2022",
      points: [
        "Migrated app from JAVA to React, resulting in a better organization of front end code and improving overall look.",
        "Implemented HTML5, CSS3, and JavaScript to create dynamic, interactive user interfaces ensuring an excellent user experience.ating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Increased internal user satisfaction rating by 20% in two months by creating features that aligned with UX and design standards while maintaining accessibility.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Uma Health",
      icon: uma,
      iconBg: "#E6DEDD",
      date: "October 2020 – November 2021",
      points: [
        "Utilized React to create interactive, responsive, and user-friendly web designs working alongside AI projects.",
        "Optimized landing website for maximum speed and scalability migrating to Next.js, ensuring compatibility with various browsers and devices and signifi cantly boosting monthly recurring revenue.",
        "Employed Redux to establish protected routes for login pages and admin dashboards, resulting in enhanced user access control and strengthening overall system security.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Manuela proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Manuela does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Manuela optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
