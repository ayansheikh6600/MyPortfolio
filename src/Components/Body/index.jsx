import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Body = () => {

 const [Repos, SetRepos] = useState(false)

  useEffect(()=>{
    (async()=>{

      const res = await axios.get("https://github-api-production-16f3.up.railway.app/api/v1/github/pinned-repos")
      console.log(res.data.repos)
      SetRepos(res.data.repos)
    })();
    
  },[0])
  return (
    <div  className="w-full p-5">
      <div className="sm:w-[85%] mx-auto" data-aos="fade-down">
      <div className="flex justify-between items-center">
      <h3 className="sm:text-3xl text-xl font-semibold bg-gradient-to-b from-[#5271FF] via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent">Hot Project</h3>
      <Link to="/allprojects" className="sm:text-2xl text-lg font-semibold hover:bg-gradient-to-bl from-[#5271FF] via-purple-500 to-pink-500 inline-block hover:bg-clip-text hover:text-transparent hover:transition-all">See All</Link>
      </div>
        

        {Repos&& Repos.map((item , index)=>{
          return(
            <div key={index} className="flex flex-col gap-5 mt-4" data-aos="fade-down">
          <div className="sm:flex w-full justify-center  rounded-3xl bg-gray-300">
            <div className="h-[250px] p-3  sm:h-[300px] w-[100%] sm:w-[30%] ">
            <iframe src={item.homepageUrl}  frameBorder="0"  className="w-full border-4 border-[#5271FF] h-full rounded-xl"></iframe>
            </div>
            <div className=" sm:w-[70%] w-[100%] p-2  flex flex-col justify-between">
              <div>
                <h1 className="sm:text-3xl text-2xl font-semibold p-2 text-[#5271FF]">
                 {item.name}
                </h1>
                <p className="p-2">
                 {item.description}
                </p>
              </div>
              <div>
                <p className="font-semibold">live Link : <a className="font-normal hover:text-[#5271FF]" target="_blank" href={item.homepageUrl}>{item.homepageUrl}</a></p>
                <p className="font-semibold">Repo Link : <a className="font-normal hover:text-[#5271FF]" target="_blank" href={item.url}>{item.url}</a></p>
              </div>
            </div>
          </div>
          
        </div>
          )
        })}
      </div>
    </div>
  );
};

export default Body;
