import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../utilities/Utilites";



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
