import React from "react";

const Body = () => {
  return (
    <div  className="w-full p-5">
      <div className="sm:w-[85%] mx-auto">
        <h3 className="text-3xl">Latest Project</h3>

        <div className="flex flex-col gap-5 mt-4">
          <div className="sm:flex w-full justify-center items-center rounded-3xl bg-gray-400">
            <div className="h-[250px] sm:h-[300px] w-[100%] sm:w-[30%] "></div>
            <div className=" sm:w-[70%] w-[100%] p-2  flex flex-col justify-between">
              <div>
                <h1 className="sm:text-3xl text-2xl font-semibold p-2">
                  Ayan aaaaaaaaaaaaaaaaa
                </h1>
                <p className="p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  accusantium, vitae nesciunt officiis alias quia ab dolorem est
                  sit similique omnis debitis odio? Delectus quo, illo
                  repellendus inventore maiores expedita.
                </p>
              </div>
              <div>
                <p className="">Visit Link : "aaaa"</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Body;
