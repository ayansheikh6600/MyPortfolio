import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";

const Projects = () => {
  const [Repos, SetRepos] = useState(false);

  useEffect(() => {
    var tempArray = [];
    (async () => {
      const querySnapshot = await getDocs(collection(db, "Projects"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data());
        tempArray.push(doc.data());
      });

      console.log(tempArray);
      SetRepos(tempArray);
    })();
  }, [0]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#5271FF] via-purple-500 to-pink-500">
      <div className="w-[90%] mx-auto">
        <div className="p-3 flex items-center">
          <Link
            to="/"
            className="text-2xl  p-2 px-6 rounded-xl text-white font-extrabold bg-gradient-to-b from-[#ff52e5] via-purple-500 to-pink-500"
          >
            {"<--"}
          </Link>
          <h1 className="text-center text-5xl font-bold w-[90%] text-white">
            ALL PROJECT'S
          </h1>
        </div>

        <div className="flex flex-col gap-5 mt-4">
          {Repos &&
            Repos.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-5 mt-4"
                  data-aos="fade-down"
                >
                  <div className="sm:flex w-full justify-center  rounded-3xl bg-gray-300">
                    <div className="h-[250px] p-3  sm:h-[300px] w-[100%] sm:w-[30%] ">
                      {item.liveLink ? (
                        <iframe
                          src={item.liveLink}
                          frameBorder="0"
                          className="w-full border-4 border-[#5271FF] h-full rounded-xl"
                        ></iframe>
                      ) : (
                        <img
                          src={item.ImageUrl}
                          className="w-full border-4 border-[#5271FF] h-full rounded-xl"
                        />
                      )}
                    </div>
                    <div className=" sm:w-[70%] w-[100%] p-2  flex flex-col justify-between">
                      <div>
                        <h1 className="sm:text-3xl text-2xl font-semibold p-2 text-[#5271FF]">
                          {item.title}
                        </h1>
                        <p className="p-2">{item.desc}</p>
                      </div>
                      <div>
                        <p className="font-semibold">
                          live Link :{" "}
                          <a
                            className="font-normal hover:text-[#5271FF]"
                            target="_blank"
                            href={
                              item.liveLink
                                ? item.liveLink
                                : `This is ${item.category}`
                            }
                          >
                            {item.liveLink
                              ? item.liveLink
                              : `This is ${item.category}`}
                          </a>
                        </p>
                        <p className="font-semibold">
                          Repo Link :{" "}
                          <a
                            className="font-normal hover:text-[#5271FF]"
                            target="_blank"
                            href={item.repoLink}
                          >
                            {item.repoLink}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
