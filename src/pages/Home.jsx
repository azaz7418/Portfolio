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
      desc: "Web dev & UI design",
      path: "/services",
      icon: <FiLayers />,
    },
    {
      title: "Resume",
      desc: "Professional journey",
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
    <section className=" flex items-center justify-center py-8 md:py-10 xl:py-0">
      <div className="container mx-auto px-4 md:px-6 xl:px-4">

        {/* Main Grid Layout to match Image Structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

          {/* --- LEFT COLUMN: Profile Card --- */}
          {/* Matches the dark card on the left of your image */}
          <div className="md:col-span-4 w-full bg-[#1c1c22] rounded-[20px] md:rounded-[30px] p-6 md:p-8 border border-white/10 flex flex-col items-center text-center shadow-xl">

            {/* Profile Image Wrapper */}
            <div className="w-full  aspect-square rounded-[20px] overflow-hidden mb-4 md:mb-6">
               <Image />
            </div>

            {/* Name & Role */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              Azaz Ahamed
            </h2>
            <span className="text-accent font-medium tracking-wide text-xs md:text-sm uppercase mb-2 block">
               Frontend Developer
            </span>
            <p className="text-white/50 text-xs md:text-sm mb-4 md:mb-6">
              Dhaka, Bangladesh
            </p>

            {/* Social Icons (Moved inside card) */}
            <div className="mb-6 md:mb-8 flex justify-center w-full">
              <Social />
            </div>

            {/* Primary Action Button (Download CV) */}
            <button
              onClick={() => downloadFile(pdf)}
              className="w-full uppercase flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-full bg-accent text-primary font-bold hover:bg-accent/80 transition-all duration-300 text-sm md:text-base"
            >
              <span>Download CV</span>
              <FiDownload className="text-lg md:text-xl" />
            </button>
          </div>


          {/* --- RIGHT COLUMN: Content & Stats --- */}
          <div className="md:col-span-8 flex flex-col justify-center space-y-6 md:space-y-8 xl:pl-8">

            {/* Header Text Section */}
            <div>
              <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Crafting Elegant <br />
                <span className="text-accent">Digital Experiences</span>
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                I excel at crafting elegant digital experiences and I am proficient
                in various programming languages and technologies. Delivering high-performance apps with intuitive UX/UI and clean code.
              </p>
            </div>

            {/* Stats Section */}
            <div className="py-4 border-y border-white/5">
               <States />
            </div>

            {/* Navigation / Links Grid */}
            <div className="space-y-4">
                <p className="text-white/40 font-medium text-xs md:text-sm uppercase tracking-widest">
                    Explore My World
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {navItems.map((item, index) => (
                        <Link
                        to={item.path}
                        key={index}
                        className="group bg-[#232329] border border-white/5 p-4 md:p-5 rounded-2xl hover:border-accent transition-all duration-300 flex items-center justify-between"
                        >
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="text-xl md:text-2xl text-white/50 group-hover:text-accent transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-accent transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-white/40">{item.desc}</p>
                            </div>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                            <FiArrowUpRight className="text-white text-sm group-hover:text-primary group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;