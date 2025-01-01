import Image from "next/image";
import React from "react";
import Container from "../Components/Helper/Container";

const ProfilePage = () => {
  return (
    <>
      <Container>
        <h1 className="text-primary-color pb-4 text-3xl text-center font-bold">
          About Our Author ♥
        </h1>
        <div className="h-1 w-40 mx-auto bg-primary-color rounded mb-2"></div>
        <div className="flex items-center justify-evenly max-w-screen-2xl">
          <div>
            <p className="p-2 text-gray-700 font-semibold">
              Karan is a skilled Full Stack Developer with a deep focus on the
              MERN stack. With extensive experience in building dynamic,
              responsive, and high-performance web applications, Karan has
              mastered the core technologies of MongoDB, Express.js, React, and
              Node.js. From crafting engaging user interfaces using React to
              developing powerful, scalable back-end systems with Node.js and
              Express, Karan excels in delivering end-to-end solutions that are
              both user-friendly and efficient.
            </p>

            <p className="p-2 text-gray-700 font-semibold">
              With a keen eye for clean, maintainable code and a passion for
              optimizing performance, Karan is dedicated to creating seamless,
              real-time web applications that meet the needs of modern users.
              Always keeping up with the latest trends in the tech world, Karan
              is committed to using the best tools and practices to build
              high-quality applications, ensuring an excellent user experience
              from the front-end to the back-end.
            </p>
          </div>
          <Image
            src={"https://picsum.photos/536/354"}
            height={350}
            quality={100}
            width={350}
            className="rounded"
            alt="Profile Picture"
          />
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;
