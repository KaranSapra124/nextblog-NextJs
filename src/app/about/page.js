import React from "react";
import Navbar from "../Components/Ui/Navbar";
import Footer from "../Components/Ui/Footer";
import Container from "../Components/Helper/Container";
import ProfilePage from "./ProfilePage";
import NewsLetter from "./NewsLetter";

const page = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h1 className="text-primary-color pb-4 text-3xl text-center font-bold">
            What We Have To Offer ?
          </h1>
          <div className="h-1 w-40 mx-auto bg-primary-color rounded mb-2"></div>
          <p className="text-sm font-semibold text-gray-700 py-2">
            NextBlog is your go-to destination for insightful, engaging, and
            thought-provoking content across a wide range of topics. Whether
            you're passionate about technology, lifestyle, health, or personal
            growth, NextBlog offers something for everyone.
          </p>
          <p className="text-sm font-semibold text-gray-700 py-2">
            Our mission is to provide you with fresh perspectives, in-depth
            articles, and practical advice that inspire and inform. Stay
            up-to-date with the latest trends, discover new ideas, and connect
            with a community of curious readers and like-minded thinkers.
          </p>
          <p className="text-sm font-semibold text-gray-700 py-2">
            {" "}
            At NextBlog, we believe in delivering high-quality content that not
            only educates but also entertains. Join us on a journey of
            exploration and keep coming back for the latest posts and updates.
          </p>
        </div>
      </Container>
        <NewsLetter/>
        <ProfilePage/>
      <Footer />
    </>
  );
};

export default page;
