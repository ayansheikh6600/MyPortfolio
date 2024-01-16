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
      Page: "Contact",
      path: "#contact",
    },
    {
      Page: "Education",
      path: "#education",
    },
    {
      Page: "Skills",
      path: "#skills",
    },
  ];

  const mainDivCSS = `w-full p-3 transition-all sticky top-0 ${AppTheme.ProfileBackColor}`;
  return (
    <div className={mainDivCSS}>
      <div className="flex items-center justify-between w-[85%] mx-auto">
        <div>
          <h1 className="text-4xl">LOGO</h1>
        </div>
        <div className="md:block hidden">
          <ul className="flex w-[500px] justify-between p-2 text-white transition-all">
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
        <div className="md:hidden" onClick={() => SetMObileNav(!mobileNav)}>
          <div className="space-y-2">
            <div className="w-8 h-1 bg-white rounded-sm"></div>
            <div className="w-8 h-1 bg-white rounded-sm"></div>
            <div className="w-8 h-1 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>

      {mobileNav ? (
        <div className="mt-2 p-2 text-white transition-all">
          <ul className="flex flex-col">
            {Pages.map((obj, index) => {
              return (
                <Link to={obj.path} key={index} className="border-b-2 p-1">
                  {obj.Page}
                </Link>
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
