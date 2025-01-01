'use client'
import React, { useEffect, useState } from "react";

const Featured = () => {
  // console.log(recipes)
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/recipes?limit=5");
      const { recipes } = await res.json();
      setRecipes(recipes);
    };
    fetchData();
  }, []);
  
  return (
    <>
      <div className="mb-2">
        <h1 className="text-3xl mb-2 text-primary-color font-bold text-center ">
          Featured Blogs!
        </h1>
        <div className="h-1 w-40 mx-auto bg-primary-color rounded mb-2"></div>
      </div>
      <div className="flex bg-gray-200 flex-wrap justify-evenly">
        {recipes?.map((elem, index) => {
          return (
            <div
              className="w-60 hover:scale-105 transition-all duration-300  cursor-pointer  shadow-lg rounded h-80 flex justify-center flex-col items-center"
              key={index}
            >
              <img className="rounded-t-lg w-full h-52" src={elem?.image} />
              <h2 className="text-black/90 text-sm font-bold my-2">
                {elem?.name}
              </h2>
              <button className="bg-black/90 text-white p-1 text-xs rounded my-2">
                Read More
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};



export default Featured;
