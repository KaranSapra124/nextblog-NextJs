"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Category = () => {
  const router = useRouter();
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/recipes/tags");
      const recipes = await res.json();
      // console.log(recipes)
      setSnacks(recipes);
    };
    fetchData();
  },[]);
  const handleClick = (e) => {
    router.push(`/Recipe/${e.target.innerHTML}`);
  };
  return (
    <>
      <div className="mb-2 my-10">
        <h1 className="text-3xl mb-2 text-primary-color font-bold text-center ">
          Try Trending Snacks!
        </h1>
        <div className="h-1 w-40 mx-auto bg-primary-color rounded mb-2"></div>
      </div>
      <div
        onClick={handleClick}
        className="flex bg-gray-200  max-w-screen-xl    my-5 "
      >
        {snacks?.slice(0, 10)?.map((elem, index) => {
          return (
            <div
              className="w-96 bg-primary-color text-white  mx-2 p-1 hover:scale-105 transition-all duration-300  cursor-pointer  shadow-lg rounded h-10 flex justify-center flex-col items-center"
              key={index}
            >
              {elem}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
