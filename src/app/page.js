import Image from "next/image";
import Navbar from "./Components/Ui/Navbar";
import Container  from "./Components/Helper/Container";
import Hero from "./Home/Hero";
import Featured from "./Home/Featured";
import Footer from "./Components/Ui/Footer";
import Category from "./Home/Category";

export default function Home() {
  return (
    <>
      <Navbar />
        <Hero/>
      <Container>
        <Featured/>
        <Category/>
      </Container>
      <Footer/>
    </>
  );
}
