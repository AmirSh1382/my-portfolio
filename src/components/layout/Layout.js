import React, { useEffect, useState } from "react";

// components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [height, setHeight] = useState(visualViewport.height + "px");

  // To aviod scrolling in Opera browser (in mobile size)
  useEffect(() => {
    const detectUserScreenHeight = () => {
      setHeight(visualViewport.height + "Px");
    };

    window.addEventListener("resize", detectUserScreenHeight);

    return () => window.removeEventListener("resize", detectUserScreenHeight);
  }, [height]);

  return (
    <div 
      style={{height}}
      className="bg-building bg-center bg-cover bg-border-box
        bg-no-repeat flex flex-col"
    >
      <Header />
      
      {children}

      <Footer />
    </div>
  );
};

export default Layout;