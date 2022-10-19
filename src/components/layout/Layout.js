import React, { useEffect, useState } from "react";

// components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [minHeight, setMinHeight] = useState(visualViewport.height + "px");

  useEffect(() => {
    const detectUserScreenHeight = () => {
      setMinHeight(visualViewport.height + "Px");
      console.log(visualViewport.height)
    };


    window.addEventListener("resize", detectUserScreenHeight);

    return () => window.removeEventListener("resize", detectUserScreenHeight);
  }, [minHeight]);

  return (
    <div 
      style={{minHeight}}
      className="bg-building bg-center bg-cover bg-border-box
        bg-no-repeat flex flex-col"
    >
        <Header />
      
      {children}

      <div className="bg-gray-700 border-t border-slate-500 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;