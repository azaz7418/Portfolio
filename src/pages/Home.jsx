/* eslint-disable react/no-unescaped-entities */
import { FiDownload, FiBriefcase, FiUser, FiLayers, FiMail, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Social from "./Social";
import Image from "./Image";
import States from "../components/States";
import pdf from "../assets/Azaz_Ahamed_Resume.pdf";
import { downloadFile } from "../utilities/Utilites";

const Home = () => {
  // Data array for the bottom navigation cards
  const navItems = [
    {
      title: "Services",
      desc: "Web development & UI design",
      path: "/services",
      icon: <FiLayers />,
    },
    {
      title: "Resume",
      desc: "My professional journey",
      path: "/resume",
      icon: <FiUser />,
    },
    {
      title: "Work",
      desc: "Project portfolio",
      path: "/work",
      icon: <FiBriefcase />,
    },
    {
      title: "Contact",
      desc: "Let's work together",
      path: "/contact",
      icon: <FiMail />,
    },
  ];

  return (
    <section className="h-full">
      <div className="container mx-auto">
        
        {/* --- Hero Section --- */}
        <div className="flex flex-col md:flex-row xl:flex-row items-center justify-between pt-8 pb-4 md:pt-12 md:pb-12 xl:pt-12 xl:pb-24">

          {/* Text Content */}
          <div className="text-center md:text-left xl:text-left order-2 md:order-none xl:order-none">
            <span className="text-xl font-medium tracking-widest text-white/60 mb-2 block">
              Frontend Developer
            </span>
            
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Azaz Ahamed</span>
            </h1>
            
            <p className="max-w-[500px] mb-9 text-white/80 leading-relaxed mx-auto xl:mx-0">
              I excel at crafting elegant digital experiences and I am proficient
              in various programming languages and technologies.
            </p>

            {/* Action Area */}
            <div className="flex flex-col md:flex-row xl:flex-row items-center gap-8">
              <button
                onClick={() => downloadFile(pdf)}
                className="uppercase flex items-center gap-2 px-6 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500 shadow-[0px_0px_20px_rgba(0,255,153,0.1)] hover:shadow-[0px_0px_30px_rgba(0,255,153,0.4)]"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>
              
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 md:order-none xl:order-none mb-8 md:mb-0 xl:mb-0 relative">
            <Image />
          </div>
        </div>
      </div>

      {/* --- Stats Section --- */}
      <States />

      {/* --- Navigation Grid (Redesigned) --- */}
      <div className="container mx-auto py-4 border-t border-white/10 mt-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Explore My World</h2>
          <p className="text-white/60 mt-2">Navigate through my professional details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {navItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="group bg-[#232329] border border-white/5 p-6 rounded-xl hover:border-accent transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="text-3xl text-white/50 group-hover:text-accent transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <FiArrowUpRight className="text-white text-xl group-hover:text-primary group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/60 leading-snug">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;