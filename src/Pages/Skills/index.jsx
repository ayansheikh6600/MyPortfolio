import React from "react";
import { Navbar } from "../../Components";
import { motion } from "framer-motion";

const Skills = () => {
  const skillData = [
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      name: "ExpressJS",
      icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
    },
    {
      name: "NodeJS",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "Redux",
      icon: "https://img.icons8.com/color/48/000000/redux.png",
    },
    {
      name: "Firebase",
      icon: "https://img.icons8.com/color/48/000000/firebase.png",
    },
    {
      name: "Android",
      icon: "https://img.icons8.com/fluency/48/000000/android-os.png",
    },
    {
      name: "MaterialUI",
      icon: "https://img.icons8.com/color/48/000000/material-ui.png",
    },
    {
      name: "ChakraUI",
      icon: "https://img.icons8.com/color/48/000000/chakra-ui.png",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      name: "Sass",
      icon: "https://img.icons8.com/color/48/000000/sass.png",
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },
    {
      name: "Java",
      icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
    },
    {
      name: "Kotlin",
      icon: "https://img.icons8.com/color/48/000000/kotlin.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/color/48/000000/postgreesql.png",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    },
    {
      name: "Heroku",
      icon: "https://img.icons8.com/color/48/000000/heroku.png",
    },
    {
      name: "Netlify",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
    },
    {
      name: "DigitalOcean",
      icon: "https://img.icons8.com/ios-filled/48/0080FF/digitalocean.png",
    },
    {
      name: "Git VCS",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
    },
    {
      name: "WordPress",
      icon: "https://img.icons8.com/color/48/000000/wordpress.png",
    },
  ];

  return (
    <div
      id="skills"
      className="w-full pt-10 bg-gradient-to-br from-[#5271FF] via-purple-500 to-pink-500"
    >
      {/* <Navbar/> */}
      <div className="w-[85%] p-4  m-auto  ">
        <div className="p-3">
          <h1 className="sm:text-5xl text-3xl text-center font-bold text-white">
            <i className="fas fa-laptop-code text-white"></i>
            Skills & Abilities
          </h1>
        </div>

        <div className="w-[100%]  bg-opacity-[40%] mt-4  py-4 rounded-lg bg-black mx-auto  grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 flex-wrap ">
          {skillData.map((item, index) => {
            return (
              
                <div key={index}
                data-aos="fade-down"
                  className="sm:w-[100px] w-[80%] h-[130px] mx-auto my-5 cursor-pointer bg-black bg-opacity-[70%] hover:bg-opacity-[100%] text-center flex flex-col justify-center items-center text-white rounded-lg"
                >
                  <img src={item.icon} className="w-[50px]" alt="" />
                  <h3>{item.name}</h3>
                </div>
             
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
