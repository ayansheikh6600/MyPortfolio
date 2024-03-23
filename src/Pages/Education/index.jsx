import React from "react";
import { Header, Navbar } from "../../Components";
import { TypeAnimation } from "react-type-animation";
import ProfileImage from "../../assets/Ayan.jpg";

const Education = () => {
  return (
    <div id="education" className="w-full overflow-hidden">
      <div className="w-full ">
        <div className="w-[85%] mt-20 mx-auto flex items-center">
          <div className="w-full" data-aos="fade-right">
            <h1 className="text-4xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-bl from-[#5271FF] via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent">
                Ayan Sheikh
              </span>
              . <br />{" "}
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
              Transforming Dreams into Digital Realities: Where Imagination
              Meets Innovation in Every Line of Code.
            </p>

            {/* <ul className="">
            {socialMediaIcons.map((item, index)=>{
              return(
              <li><i className={item.Icon}></i>{item.Name}</li>)
            })}
          </ul> */}
          </div>
          <div className="w-full sm:block hidden" data-aos="fade-left">
            <div
              className={
                "md:w-[300px] md:h-[400px]  w-[240px] h-[300px] mx-auto"
              }
            >
              <img
                src={ProfileImage}
                className="w-full h-full rounded-lg shadow-[23px_-23px_5px_0px_rgba(82,113,255,1.3)]  hover:shadow-[-23px_23px_5px_0px_rgba(82,113,255,1.3)] transition-all cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[95%] mx-auto" data-aos="fade-up">
          <h1 className="text-3xl font-bold">Education</h1>
          <div className="w-full p-3">
            <h1 className="text-lg font-semibold">Matriculation (2021-2022)</h1>
            <ul className="list-disc p-2">
              <li>
                I successfully completed my matriculation with an A-ONE grade in
                May 2022. I have a particular interest in the field of computer
                science. Demonstrating excellent performance and understanding
                in this field, I cleared my matriculation exams. My goal is to
                further enhance my knowledge and skills in computer science and
                utilize this hard work for my future endeavors.
              </li>
            </ul>
          </div>
          <div className="w-full p-3">
            <h1 className="text-lg font-semibold">Intermediate</h1>
            <ul className="list-disc p-2">
              <li>
                As of now, I am currently pursuing my intermediate studies,
                specializing in computer science. My academic journey has been
                marked by a strong commitment to understanding the intricacies
                of this field, and I am actively engaged in coursework that
                enhances my knowledge and skills.{" "}
              </li>
              <li>
                I am maintaining a dedicated approach to my studies,
                consistently striving for excellence and aiming for a strong
                academic standing. Through my coursework and practical
                experiences, I am developing a robust foundation in computer
                science, which I plan to leverage for future academic and
                professional endeavors. I am excited about the learning
                opportunities ahead and am eager to contribute to the field of
                computer science in the future
              </li>
            </ul>
          </div>
          <div className="w-full p-3">
            <h1 className="text-lg font-semibold">
              Mern Stack Development (Course One Year)
            </h1>
            <ul className="list-disc p-2">
              <li>
                That's impressive! Completing a MERN Stack course with Saylani
                Mass IT Training (SMIT) indicates a strong commitment to
                enhancing your skills in web development. The MERN Stack, which
                stands for MongoDB, Express.js, React.js, and Node.js, is a
                powerful combination for building modern and dynamic web
                applications.
              </li>
              <li>
                By undertaking this course at SMIT, you likely gained hands-on
                experience in developing full-stack applications, understanding
                the intricacies of each component in the MERN Stack. This
                practical knowledge will undoubtedly be valuable as you continue
                to explore opportunities in the field of web development.
              </li>

              <li>
                It's worth highlighting your dedication to staying current with
                industry-relevant technologies, and this certification can serve
                as a strong asset as you apply your skills to real-world
                projects or pursue further opportunities in the world of IT.
                Congratulations on this accomplishment!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
