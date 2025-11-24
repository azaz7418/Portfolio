import { motion } from "framer-motion";
// import { BsArrowDownRight } from "react-icons/bs";
// import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Website Design & Development",
    description:
      "Creating and developing visually appealing, responsive, and user-friendly websites using HTML, CSS, and JavaScript. This includes layout creation, design implementation, and ensuring smooth navigation and interactions.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Implementation",
    description:
      "Converting design mockups (from tools like Figma, Adobe XD, or Sketch) into fully functional web pages. This involves focusing on user experience (UX) principles and applying user interface (UI) design concepts to enhance usability.",
    href: "",
  },
  {
    num: "03",
    title: "Responsive Web Design",
    description:
      "Building websites that adapt seamlessly to different screen sizes and devices, ensuring optimal user experiences across desktops, tablets, and mobile phones.",
    href: "",
  },
  {
    num: "04",
    title: "Front-End Debugging and Testing",
    description:
      "Identifying and fixing front-end bugs using debugging tools and performing thorough testing to ensure the website functions correctly. This includes testing for browser compatibility, mobile responsiveness, and smooth interactivity.",
    href: "",
  },
  {
    num: "04",
    title: "Integration with Backend Services",
    description:
      "Collaborating with backend developers to integrate front-end interfaces with APIs and databases, ensuring seamless data flow and interactions between the client and server.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className=" h-full bg-primary">
      <div className=" container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
          className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className=" flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className=" w-full flex justify-between items-center">
                  <div className=" text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  {/* <Link
                    to={service.href}
                    className=" w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className=" text-primary text-3xl" />
                  </Link> */}
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className=" text-white/60 text-justify">{service.description}</p>
                {/* border */}
                <div className=" border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
