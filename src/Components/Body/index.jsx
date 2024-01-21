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
      <h3 className="sm:text-3xl text-xl font-semibold text-[#5271FF]">Pinned Project</h3>
      <Link to="/allprojects" className="sm:text-2xl text-lg font-semibold hover:text-[#5271FF] transition-all">See All</Link>
      </div>
        

        {Repos&& Repos.map((item , index)=>{
          return(
            <div className="flex flex-col gap-5 mt-4" data-aos="fade-down">
          <div className="sm:flex w-full justify-center  rounded-3xl bg-gray-300">
            <div className="h-[250px] p-3  sm:h-[300px] w-[100%] sm:w-[30%] ">
            <iframe src={item.homepageUrl}  frameborder="0"  className="w-full h-full"></iframe>
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
