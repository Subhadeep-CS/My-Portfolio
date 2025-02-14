// import { shopify, starbucks, tesla } from "../assets/images";
import html from "../assets/icons/html.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import css from "../assets/icons/css.svg";
import react from "../assets/icons/react.svg";
import nextjs from "../assets/icons/nextjs.svg";
import javascript from "../assets/icons/javascript.svg";
import typescript from "../assets/icons/typescript.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import redux from "../assets/icons/redux.svg";
import sass from "../assets/icons/sass.svg";
import motion from "../assets/icons/motion.svg";
import shadcn from "../assets/icons/shadcn.png";
import brainiumicon from "../assets/icons/brainiumicon.png";
import movie from "../assets/icons/movie.png";
// import meta from "../assets/images/meta.png";
// import {
//     car,
//     contact,
//     css,
//     estate,
//     express,
//     git,
//     github,
//     html,
//     javascript,
//     linkedin,
//     mongodb,
//     motion,
//     mui,
//     nextjs,
//     nodejs,
//     pricewise,
//     react,
//     redux,
//     sass,
//     snapgram,
//     summiz,
//     tailwindcss,
//     threads,
//     typescript
// } from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: shadcn,
    name: "ShadCN",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
];

export const experiences = [
  {
    title: "Software Engineer(React.js and Next.js)",
    company_name: "Brainium Information Technologies Private Limited",
    icon: brainiumicon,
    iconBg: "#accbe1",
    date: "August 2024 -  Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Brainium Information Technologies Private Limited",
    icon: brainiumicon,
    iconBg: "#fbc3bc",
    date: "Apr 2024 - July 2024",
    points: [
      "Built reusable React components to improve scalability",
      "Assisted in migrating a project from React.js to Next.js, boosting performance and SEO",
      "Worked with Git for version control and code reviews",
    ],
  },
];

// export const socialLinks = [
//     {
//         name: 'Contact',
//         iconUrl: contact,
//         link: '/contact',
//     },
//     {
//         name: 'GitHub',
//         iconUrl: github,
//         link: 'https://github.com/YourGitHubUsername',
//     },
//     {
//         name: 'LinkedIn',
//         iconUrl: linkedin,
//         link: 'https://www.linkedin.com/in/YourLinkedInUsername',
//     }
// ];

export const projects = [
  {
    iconUrl: movie,
    theme: "btn-back-red",
    name: "Movie Flix",
    description: `MovieFlix is a feature-rich Netflix clone built with Next.js, React, and Tailwind CSS. It offers a sleek, responsive UI with dynamic movie listings, user authentication, and  
  real-time data fetching from the TMDB API. Designed for a seamless streaming experience,  
  MovieFlix showcases my expertise in modern web development, API integration, and UI/UX design`,
  status:"Completed",
    link: "https://netflix-6a9c2.web.app/",
  },
  // {
  //   iconUrl: threads,
  //   theme: "btn-back-green",
  //   name: "Full Stack Threads Clone",
  //   description:
  //     'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //   link: "https://github.com/adrianhajdin/threads",
  // },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
