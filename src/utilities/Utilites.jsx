export const downloadFile = (pdf) => {
  const fileUrl = pdf;
  const fileName = "Azaz_Ahamed_Resume.pdf";
  const anchor = document.createElement("a");
  anchor.href = fileUrl;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();

  // Remove the anchor element afterward
  document.body.removeChild(anchor);
};

export const projects = [
  {
    num: "01",
    category: "Mess Metrics",
    title: "Mess Metrics",
    description:
      "Developed a system with custom authentication and authorization. Only the manager has access to perform CRUD operations on all members' data. The system allows the manager to add or remove members and calculate monthly accounts.",
    // Bootstrap, CSS, React.js, React Router, Redux, Vite js, Express, Mongo and Mongoose, JWT, Bcrypt.
    stack: [
      {
        name: "Bootstrap",
      },
      {
        name: "Css 3",
      },
      {
        name: "React.js",
      },
      {
        name: "React Router",
      },
      {
        name: "Express",
      },
      {
        name: "Mongo and Mongoose",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://mess-metrics.netlify.app/",
    gitHub: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Movie Review App",
    description:
      "A React-based movie/TV show browsing application with modern UI components. Features categorized navigation for movies/TV shows with sub-menus and search functionality. Uses React Router for navigation, Tailwind CSS for styling, and Redux for state management.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Redux",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://movie-review-task.netlify.app/",
    gitHub: "https://github.com/azaz7418/Movie-Review",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Fresco",
    description:
      "Fresco is a lightweight, responsive web application deployed on Netlify, designed as a practice project for building and hosting modern frontend interfaces. The project focuses on clean structure, minimal design, and fast deployment workflow using Netlify’s continuous deployment system.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Tailwind.css",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://fresco-rs.netlify.app/",
    gitHub: "https://github.com/azaz7418/Fresco",
  },
];
