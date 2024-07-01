import { Link } from "react-router-dom";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className=" py-8 xl:py-12  md:py-12 text-white">
      <div className=" container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <h2 className=" text-4xl font-semibold">
            Azaz<span className=" text-accent">.</span>
          </h2>
        </Link>

        {/* desktop nav */}

        <div className=" hidden md:flex items-center gap-8">
          <Nav />
          <Link>
            <button className=" button">Hire me</button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
