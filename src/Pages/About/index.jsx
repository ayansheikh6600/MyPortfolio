import React from "react";
import { Header, Navbar } from "../../Components";
import Profile from "../../assets/ProfileImage.png";
import { TypeAnimation } from "react-type-animation";
import AyanImage from '../../assets/Ayan.jpg'

const About = () => {
  const pointlists = [
    `Hello! I am Ayan Sheikh, a
    dedicated MERN Stack Developer with a passion for building
    innovative and user-centric web and mobile applications. Currently
    enrolled in my second year of Engineering, I embarked on my coding
    journey with a profound interest in transforming ideas into
    functional and aesthetically pleasing digital experiences.`,
    `My introduction to the world of web development came through a comprehensive MERN Stack course at Saylani Mass IT Training. Since then, I have immersed myself in the realms of JavaScript, React.js, Node.js, and MongoDB, honing my skills in crafting robust and scalable solutions.`,
    `A significant part of my journey has been exploring the realm of mobile app development, particularly with React Native. I take pride in creating meaningful applications, such as an Attendance App and a Food App, showcasing my ability to leverage cutting-edge technologies to address real-world challenges.`,
    `Beyond coding, I find joy in the creative process of designing and developing user-friendly interfaces. My blog post website, crafted using HTML, CSS, and JavaScript, stands as a testament to my commitment to creating seamless and engaging online experiences.`,
    `What sets me apart is my solution-oriented mindset and resilience in the face of challenges. I thrive on continuously expanding my knowledge base and am genuinely excited about the dynamic landscape of technology. I am committed to staying abreast of emerging trends and technologies to deliver solutions that align with the latest industry standards.`
  ];

  

  return (
    <div className="w-full p-2 pt-10" id="about">
      {/* <header className="flex h-[400px] bg-white w-[90%] mx-auto">
        <div className="w-[50%] bg-white flex flex-col justify-center pl-7">
          <h1 className="text-4xl font-bold">Ayan Sheikh</h1>
          <p className="font-thin">
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
          </p>
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          <img src={Profile} className="w-[400px] h-400px]" alt="" />
        </div>
      </header> */}
      {/* <Header /> */}
      <section className="w-[90%] mx-auto">
        <h2 className="text-3xl mb-2 font-semibold">About Me</h2>
        <div className="w-full flex flex-col-reverse mt-8 items-center md:flex-row">
          <div className="md:w-[70%] w-full p-3">
          <ul className="list-disc flex flex-col  sm:gap-3 gap-1">
          {pointlists.map((item, index)=>{
            return(
              <li className="text-lg" key={index}>{item}</li> 
              
              
            )
          })}
        </ul>
          </div>
          <div className="md:w-[30%] w-full flex flex-col justify-center items-center text-center">
            <img src={AyanImage} className="w-[140px] sm:w-[200px] md:w-[250px]  rounded-lg shadow-[23px_-23px_5px_0px_rgba(82,113,255,1.3)]  hover:shadow-[-23px_23px_5px_0px_rgba(82,113,255,1.3)] transition-all cursor-pointer" alt="" />
            <h1 className="text-xl font-bold mt-7">Ayan Sheikh</h1>
            <button className="bg-[#5271FF] hover:bg-[#2d54ff]  p-3 mt-2 text-white font-bold rounded-lg"><a href="">Resume</a></button>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default About;
