import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-96">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Hero Image"
        />
        <div className="bg-black/50 h-full w-full absolute top-0 left-0"></div>
        <div className="absolute  inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl font-bold text-center">
            Get Blogs At Your Hands
          </h1>
          <button className="bg-black/80 p-1 rounded font-bold my-2 text-white">Explore Now!</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
