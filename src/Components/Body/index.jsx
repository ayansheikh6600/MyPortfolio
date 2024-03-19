import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { data } from "autoprefixer";

const Body = () => {

 const [Repos, SetRepos] = useState(false)

  useEffect(()=>{
    var tempArray = [];
    (async()=>{
      const querySnapshot = await getDocs(collection(db, "Projects"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
      tempArray.push(doc.data())
      });
      
      console.log(tempArray);
      SetRepos(tempArray)
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
              {item.liveLink ? (
                <iframe src={item.liveLink}  frameBorder="0"  className="w-full border-4 border-[#5271FF] h-full rounded-xl"></iframe>
              ) : (
                <img src={item.ImageUrl}   className="w-full border-4 border-[#5271FF] h-full rounded-xl"/>
              )}
            
            </div>
            <div className=" sm:w-[70%] w-[100%] p-2  flex flex-col justify-between">
              <div>
                <h1 className="sm:text-3xl text-2xl font-semibold p-2 text-[#5271FF]">
                 {item.title}
                </h1>
                <p className="p-2">
                 {item.desc}
                </p>
              </div>
              <div>
                <p className="font-semibold">live Link : <a className="font-normal hover:text-[#5271FF]" target="_blank" href={item.liveLink ? item.liveLink : `This is ${item.category}`}>{item.liveLink ? item.liveLink : `This is ${item.category}`}</a></p>
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
