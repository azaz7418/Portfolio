import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
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
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laborum, distinctio expedita dign",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Node.js",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    gitHub: "",
  },
  
];

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className=" flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 rounded-lg overflow-hidden group">
              <div className="h-[200px] relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to={`/work/${project.num}`}
                    className="bg-accent text-primary px-4 py-2 rounded hover:bg-accent-hover transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-accent capitalize mb-2">{project.category}</p>
                <p className="text-white/60 text-sm line-clamp-3">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
