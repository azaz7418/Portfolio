import { motion } from "framer-motion";
import { FaCode, FaPalette, FaMobileAlt, FaBug, FaServer } from "react-icons/fa";
// import { BsArrowDownRight } from "react-icons/bs";
// import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Website Design & Development",
    description:
      "Creating and developing visually appealing, responsive, and user-friendly websites using HTML, CSS, and JavaScript. This includes layout creation, design implementation, and ensuring smooth navigation and interactions.",
    icon: FaCode,
  },
  {
    num: "02",
    title: "UI/UX Implementation",
    description:
      "Converting design mockups (from tools like Figma, Adobe XD, or Sketch) into fully functional web pages. This involves focusing on user experience (UX) principles and applying user interface (UI) design concepts to enhance usability.",
    icon: FaPalette,
  },
  {
    num: "03",
    title: "Responsive Web Design",
    description:
      "Building websites that adapt seamlessly to different screen sizes and devices, ensuring optimal user experiences across desktops, tablets, and mobile phones.",
    icon: FaMobileAlt,
  },
  {
    num: "04",
    title: "Front-End Debugging and Testing",
    description:
      "Identifying and fixing front-end bugs using debugging tools and performing thorough testing to ensure the website functions correctly. This includes testing for browser compatibility, mobile responsiveness, and smooth interactivity.",
    icon: FaBug,
  },
  {
    num: "05",
    title: "Integration with Backend Services",
    description:
      "Collaborating with backend developers to integrate front-end interfaces with APIs and databases, ensuring seamless data flow and interactions between the client and server.",
    icon: FaServer,
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.4,
        ease: "easeIn",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-full bg-primary py-12">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 group"
              >
                {/* icon and number */}
                <div className="flex items-center gap-4 mb-4">
                  <IconComponent className="text-4xl text-accent" />
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                </div>
                {/* title */}
                <h2 className="text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 mb-4">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 text-justify">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
