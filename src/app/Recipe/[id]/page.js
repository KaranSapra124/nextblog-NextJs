import Container from "@/app/Components/Helper/Container";
import Footer from "@/app/Components/Ui/Footer";
import Navbar from "@/app/Components/Ui/Navbar";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const id = await params?.id;
  const res = await fetch(`https://dummyjson.com/recipes/tag/${id}`);
  const { recipes } = await res.json();

  //   console.log(recipes)
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h1 className="text-center text-3xl text-primary-color font-bold my-2">
            Recipes for {id}
          </h1>
          <div className="h-1 w-64 bg-primary-color rounded-full mx-auto my-4"></div>
          <div className="flex justify-evenly flex-wrap">
            {recipes?.length > 0 ? (
              recipes?.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-lg duration-300 w-60 m-4 rounded cursor-pointer hover:scale-110 transition-all"
                  >
                    <Image
                      src={elem?.image}
                      height={200}
                      quality={100}
                      className="object-cover mx-auto p-5 rounded-full"
                      width={200}
                      alt="No Image"
                    />
                    <h2 className="text-md p-2 font-extrabold text-center my-2 text-primary-color">
                      {elem?.name}
                    </h2>
                  </div>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
            {/* <Individual title={recipes} /> */}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default page;
