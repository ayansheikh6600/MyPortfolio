import React from "react";
import { Navbar } from "../../Components";

const Contact = () => {
  return (
    <div id="contact" className="w-full  ">
      {/* <Navbar /> */}
      <div className="w-full mx-auto py-4">
        <div className="text-center p-5 flex flex-col justify-center bg-[#5271FF] rounded-t-[130px]">
          <h1 className="sm:text-3xl text-2xl text-center font-bold text-white">Contact Us</h1>
          <p className="font-bold">
            Phone: <span className="text-white">03198187639</span>
          </p>
          <p className="font-bold">
            Email: <span className="text-white">ayansheikh1200@gmail.com</span>
          </p>
        </div>
        <div className="w-full bg-[#5271FF] ">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center ">
          <div className="w-[90%] flex flex-col gap-5 p-2">
            <input
              className="p-3 text-lg rounded-lg focus:outline-[#5271FF]"
              placeholder="Enter Your Name"
              type="text"
              name=""
              id=""
            />
            <input
              className="p-3 text-lg rounded-lg focus:outline-[#5271FF]"
              placeholder="Enter Your Email"
              type="email"
              name=""
              id=""
            />
            <input
              className="p-3 text-lg rounded-lg focus:outline-[#5271FF]"
              placeholder="Enter Your Phone No"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-[90%] p-2">
            <textarea
              placeholder="Enter Your Message"
              className="text-lg w-full h-[200px] p-2 rounded-lg focus:outline-[#5271FF]"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        </div>
        
        <div className="w-full flex justify-center mt-10 ">
          <button className="p-2 bg-[#5271FF] rounded-md hover:bg-[#2c53ff] text-white font-bold">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
