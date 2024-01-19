import React from "react";
import { AppTheme } from "../../../Utils";
import ProfileImage from "../../assets/ProfileImage.png";
import Navbar from "../Navbar";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Header = () => {

  const socialMediaIcons =[
    {
     Name : "Github",
     Icon :"fa-brands fa-github"
    },
    {
     Name : "Facebook",
     Icon :"fa-brands fa-facebook"
    },
    {
     Name : "Instagram",
     Icon :"fa-brands fa-instagram"
    },
    {
     Name : "LinkedIn",
     Icon :"fa-brands fa-linkedin"
    },
  ]



  return (
    <div id="top" className="w-full ">
      {/* <Navbar /> */}
      <div className="w-[85%] mt-20 mx-auto flex items-center">
        <div className="w-full" data-aos="fade-right">
          <h1 className="text-4xl font-bold">
           <Link to="login" className="cursor-text"> Hi</Link>, I'm <span className="text-[#5271FF]">Ayan Sheikh</span>. <br />{" "}
            <span className="text-sm">
            <TypeAnimation
            
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Front-End Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "MERN Stack Developer",
              1000,
              "React Native Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
            </span>
            
          </h1>
          <p className="text-gray-500 mt-2">
            Transforming Dreams into Digital Realities: Where Imagination Meets
            Innovation in Every Line of Code.
          </p>
          <div className="flex w-[290px] p-3 justify-between">
            <div className="bg-[#5271FF] p-2 w-[120px] text-center text-white rounded-[30px]">
              About Me
            </div>
            <div className="bg-gray-400 border border-gray-600 p-2 w-[120px] text-center text-gray-700 rounded-[30px]">
              Contact Us
            </div>
            
          </div>
          {/* <ul className="">
            {socialMediaIcons.map((item, index)=>{
              return(
              <li><i className={item.Icon}></i>{item.Name}</li>)
            })}
          </ul> */}
        </div>
        <div className="w-full sm:block hidden">
          <div
            className={"md:w-[400px] md:h-[400px]  w-[300px] h-[300px] mx-auto"}
            data-aos="fade-left"
          >
            <img src={ProfileImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
