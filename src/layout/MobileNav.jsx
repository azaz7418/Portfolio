import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  }
  
  
];
const MobileNav = () => {
  const [isActiv, setIsActiv] = useState(false);
  const navMenue = () => {
    setIsActiv(!isActiv);
    console.log("yes");
  };
  return (
    <nav className=" flex gap-8  ">
      <div className={`${isActiv ? " block  w-full h-screen absolute right-0 top-0 " : " hidden"}`}>
        <div className=" grid grid-flow-col grid-col-6 ">
          <div onClick={navMenue} className=" col-span-2 bg-transparent   "></div>
          <div className=" col-span-4 bg-black  h-screen">
            <div className=" flex justify-between items-center p-5">
              

              <RxCross2 onClick={navMenue} className=" text-[25px]  text-accent" />
            </div>
            <Link className=" text-center mt-2 mb-5" to="/">
              <h2 className=" text-4xl mt-4 mb-10 font-semibold">
                Azaz<span className=" text-accent">.</span>
              </h2>
            </Link>

            {/* menu */}
            <div className="overflow-y-scroll" style={{height:"calc(100vh - 170px)"}}>
              {links.map((link) => {
                return (
                  <div key={link.id} className="flex justify-center align-middle ">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => {
                        return isActive
                          ? " text-accent border-b-2 my-[10px] border-accent capitalize"
                          : "  capitalize font-medium my-3 hover:text-accent transition-all";
                      }}
                    >
                      {link.name}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <CiMenuFries onClick={navMenue} className=" text-[32px] text-accent" />
    </nav>
  );
};

export default MobileNav;
