import news from "../assets/news.png";
import youtube from "../assets/youtube.png";
import crud from "../assets/crud.png";
import wonder from "../assets/wonder.png";

const work = [
  {
    title: "wondernews.in",
    image: wonder,
    description: {
      one: "Launched a live website with a rapidly growing user base.",
      two: "Engineered a MERN stack news application featuring an advanced admin panel and secure, protected routes.",
      three:
        "Deployed on Hostinger with SSL certificates for enhanced security and reliability.",
    },
    link: "https://www.wondernews.in/",
    github: "https://github.com/Durgesh18-p/NewsApp",
  },
  {
    title: "The Observer's Insight.",
    image: news,
    description: {
      one: "Engineered a robust MERN stack news application with an intuitive admin panel and secure, protected routes.",
      two: "Integrated user-friendly features like commenting and dynamic news categorization for an enhanced experience.",
      three:
        "Incorporated a weather section to provide city-specific forecasts for added utility.",
    },
    link: "https://the-observers-insight.vercel.app/",
    github: "https://github.com/Durgesh18-p/NewsApp",
  },
  {
    title: "Content Hub.",
    image: youtube,
    description: {
      one: "Crafted a dynamic video content platform using React JS, enhanced with Tailwind CSS and Material UI for an engaging user interface",
      two: "Seamlessly integrated the YouTube API to fetch and display real-time video data",
      three: "Implemented Firebase for robust and secure user authentication",
    },
    link: "https://video-content-app.netlify.app/",
    github: "https://github.com/Durgesh18-p/YouTube",
  },
  {
    title: "CRUD App.",
    image: crud,
    description: {
      one: "Built UI using React JS, Bootstrap and state is managed by Redux tool-kit.",
      two: "User authenticated before accessing the app. Authentication done using Firebase",
      three:
        "CRUD (Create , Read , Update , Delete) operations can be implemented by user.",
    },
    github: "https://github.com/Durgesh18-p/React_JS_CRUD_App",
  },
];

export default work;
