import { Route, Routes } from "react-router-dom";
import Teams from "../pages/Teams";
import MainHeader from "./MainHeader";

const Layout = () => {
  return (
    <div className="display">
      <MainHeader />
      {/* this is the main container for all pages */}
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="*" element={<Teams />} />
      </Routes>
    </div>
  );
};

export default Layout;
