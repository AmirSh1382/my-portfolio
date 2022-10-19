import React from "react";

// React-router-dom
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-white flex flex-1 items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center w-full px-5">
        <div className="text-2xl">
           WELCOME TO MY PORTFOLIO
        </div>
        <div className="text-center text-lg mt-2">
            I'm
            <span className="text-primary"> 
                &nbsp;
                Amir Shafikhani
            </span>
            , a front-end web developer living in Iran chasing my passion and building my career path.
        </div>
        <Link to="/aboutme" className="text-sm  border border-slate-300 hover:bg-slate-700 mt-8 hover:bg- py-2 px-7">
            About me
        </Link>
      </div>
    </div>
  );
};

export default Home;