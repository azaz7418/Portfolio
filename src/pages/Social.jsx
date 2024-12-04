import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const socials = [
  {
    icon: <FiGithub />,
    path: "https://github.com/azaz7418",
  },
  {
    icon: <FiLinkedin />,
    path: "https://www.linkedin.com/in/azaz-ahamed-534b30286/",
  },
  // {
  //   icon: <FiYoutube />,
  //   path: "",
  // },
  {
    icon: <FiTwitter />,
    path: "https://x.com/AzazAha52294106",
  },
];
const Social = () => {
  return (
    <div className=" flex gap-6 ">
      {socials.map((item) => {
        return (
          <div key={item.id} className="  ">
            <Link
              to={item.path}
              className=" w-9 p-2 border border-accent rounded-full  font-extrabold flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            >
              {item.icon}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
