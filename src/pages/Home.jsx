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
          <div className="md:col-span-4 w-full bg-[#1c1c22] rounded-[20px] md:rounded-[30px] p-6 md:p-8 border border-white/10 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
            {/* --- NEW ANIMATION: ROTATING NEBULA --- */}
            {/* This creates a large, slow-spinning gradient mesh behind the glass */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-20 pointer-events-none">
              <div
                className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,theme('colors.accent.DEFAULT')_50%,#000000_100%)] animate-spin blur-[100px]"
                style={{ animationDuration: "20s" }} // Very slow, smooth rotation
              ></div>
            </div>

            {/* Noise Texture (Optional: Adds a matte finish to prevent color banding) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
            {/* --- ANIMATION END --- */}

            {/* Content Wrapper (Backdrop blur makes the text pop against the nebula) */}
            <div className="relative z-10 w-full flex flex-col items-center bg-[#1c1c22]/10 backdrop-blur-sm rounded-[20px] p-4">
              {/* Profile Image Wrapper */}
              <div className="w-full aspect-square rounded-[20px] overflow-hidden mb-4 md:mb-6 border-2 border-white/5 shadow-lg">
                <Image />
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Azaz Ahamed</h2>
              <span className="text-accent font-medium tracking-wide text-xs md:text-sm uppercase mb-2 block">
                Frontend Developer
              </span>
              <p className="text-white/50 text-xs md:text-sm mb-4 md:mb-6">Khulna, Bangladesh</p>

              {/* Social Icons */}
              <div className="mb-6 md:mb-8 flex justify-center w-full">
                <Social />
              </div>

              <button
                onClick={() => downloadFile(pdf)}
                className="w-full uppercase flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-full bg-gradient-to-r from-accent to-accent-hover text-primary font-bold hover:shadow-[0_0_20px_rgba(0,255,150,0.3)] transition-all duration-300 text-sm md:text-base"
              >
                <span>Download CV</span>
                <FiDownload className="text-lg md:text-xl" />
              </button>
            </div>
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
                I excel at crafting elegant digital experiences and I am proficient in various programming languages and
                technologies. Delivering high-performance apps with intuitive UX/UI and clean code.
              </p>
            </div>

            {/* Stats Section */}
            <div className="py-4 border-y border-white/5">
              <States />
            </div>

            {/* Navigation / Links Grid */}
            <div className="space-y-4">
              <p className="text-white/40 font-medium text-xs md:text-sm uppercase tracking-widest">Explore My World</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {navItems.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    className="group relative bg-[#232329] overflow-hidden rounded-r-xl transition-all duration-300"
                  >
                    {/* Active Side Bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 group-hover:bg-accent group-hover:w-1.5 transition-all duration-300"></div>

                    <div className="p-5 pl-8 flex justify-between items-start">
                      <div className="relative z-10">
                        <div className="text-accent mb-3 text-2xl">{item.icon}</div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-white/40 group-hover:text-white/60">{item.desc}</p>
                      </div>

                      <div className="h-10 w-10 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                        <FiArrowUpRight className="text-lg" />
                      </div>
                    </div>

                    {/* Large Background Watermark Icon */}
                    <div className="absolute -right-4 -bottom-4 text-8xl text-white/[0.02] group-hover:text-accent/[0.05] transition-colors pointer-events-none">
                      {item.icon}
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
