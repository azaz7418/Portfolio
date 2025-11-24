import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip } from "antd";

const projects = [
  {
    num: "01",
    category: "Mess Metrics",
    title: "Project 1",
    description:
      "Developed a system with custom authentication and authorization. Only the manager has access to perform CRUD operations on all members' data. The system allows the manager to add or remove members and calculate monthly accounts.",
    stack: [
      { name: "Bootstrap" },
      { name: "Css 3" },
      { name: "React.js" },
      { name: "React Router" },
      { name: "Express" },
      { name: "Mongo and Mongoose" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://mess-metrics.netlify.app/",
    gitHub: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project 2",
    description:
      "A React-based movie/TV show browsing application with modern UI components. Features categorized navigation for movies/TV shows with sub-menus and search functionality. Uses React Router for navigation, Tailwind CSS for styling, and Redux for state management.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Redux" },
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
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    gitHub: "",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.num === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="w-full xl:w-[50%] flex flex-col justify-between">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <h3 className="text-2xl font-semibold text-accent">{project.title}</h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Tooltip
                    title="Live Project"
                    mouseEnterDelay={0.3}
                    overlayInnerStyle={{ backgroundColor: "white", fontWeight: "bold", color: "black" }}
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </div>
                    </a>
                  </Tooltip>
                )}
                {project.gitHub && (
                  <Tooltip
                    title="Github Repository"
                    mouseEnterDelay={0.3}
                    overlayInnerStyle={{ backgroundColor: "white", fontWeight: "bold", color: "black" }}
                  >
                    <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                      <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </div>
                    </a>
                  </Tooltip>
                )}
              </div>
              <Link to="/work" className="text-accent hover:underline">
                Back to Projects
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;