// import { Outlet } from "react-router-dom";
import Header from "./Header";
// import PageTransition from "../pages/PageTransition";
import { Outlet } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Layout = () => {
  return (
    <body className=" body *:p-[15px] *:m-0 *:box-border h-full  flex flex-col">
      <Header/>
        <Outlet /> 
      {/* <PageTransition>
      </PageTransition> */}
    </body>
  );
};

export default Layout;
