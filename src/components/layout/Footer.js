import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 border-t-5 border-slate-500 mt-auto">
      <div className="text-white flex items-center justify-between max-w-5xl mx-auto px-6 py-2">
        <div>
          <a
            target="blank"
            href="https://github.com/AmirSh1382"
            className="hover:text-primary transition"
          >
            <i className="bi bi-github text-xl"></i>
          </a>
        </div>

        <div>
          <div className="flex items-center gap-x-2 cursor-pointer transition">
            <i className="bi bi-envelope text-xl hover:text-primary"></i>
            <span className="text-sm hover:text-primary hover:text-base">
              amirsh.webdev@gmail.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;