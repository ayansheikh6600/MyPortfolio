import React, { useState } from "react";
import { AppTheme } from "../../../Utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, SetMObileNav] = useState(false);
  const Pages = [
    {
      Page: "Home",
      path: "#top",
    },
    {
      Page: "About",
      path: "#about",
    },
    {
      Page: "Education",
      path: "#education",
    },
    {
      Page: "Skills",
      path: "#skills",
    },
    {
      Page: "Contact",
      path: "#contact",
    },
  ];

  const mainDivCSS = `w-full transition-all sticky top-0 bg-white`;
  return (
    <div className={mainDivCSS} >
      <div className="flex items-center justify-between w-full mx-auto">
        <div className="ml-6">
          <h1 className="text-4xl">LOGO</h1>
        </div>
        <div className="md:block hidden bg-gradient-to-bl to-[#5271FF] via-purple-500 from-pink-500 p-3 rounded-es-[33px]" >
          <ul className="flex w-[500px]  justify-between p-2 text-white transition-all">
            {Pages.map((obj, index) => {
              return (
                <a
                  href={obj.path}
                  className="hover:border-b-2 cursor-pointer transition-all"
                  key={index}
                >
                  {obj.Page}
                </a>
              );
            })}
          </ul>
        </div>
        <div className="md:hidden bg-[#5271FF] p-2 my-2 rounded-lg mr-5" onClick={() => SetMObileNav(!mobileNav)}>
          <div className="space-y-2 ">
            <div className="w-8 h-1 bg-white rounded-sm"></div>
            <div className="w-8 h-1 bg-white rounded-sm"></div>
            <div className="w-8 h-1 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>

      {mobileNav ? (
        <div className="mt-2 p-2 bg-[#5271FF] text-white transition-all" data-aos="fade-down" >
          <ul className="flex flex-col">
            {Pages.map((obj, index) => {
              return (
                <a href={obj.path} key={index} className="border-b-2 p-1">
                  {obj.Page}
                </a>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
