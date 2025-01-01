import React from "react";
import Container from "../Components/Helper/Container";

const NewsLetter = () => {
  return (
    <>
      <Container>
        <h1 className="text-primary-color pb-4 text-3xl text-center font-bold">
          Wanna Get Updates!
        </h1>
        <div className="h-1 w-40 mx-auto bg-primary-color rounded mb-2"></div>
        <div className="bg-primary-color w-fit mx-auto p-10 my-10 rounded-xl text-white">
          <div className="p-10 text-center">
            <h2 className="text-2xl font-bold">Subscribe To Our News Letter!</h2>
            <div className="h-1 w-40 mx-auto bg-white my-4 rounded "></div>

            <form>
              <input className="p-2 w-80 rounded-l-full" placeholder="Enter Your Email..." type="email" />
              <button className="shadow-xl font-bold p-2 rounded-r-full">Subscribe</button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewsLetter;
