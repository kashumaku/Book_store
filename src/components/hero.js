import { useEffect, useRef } from "react";
import hero from "../assets/img/hero.jpg";
//import hero1 from "../assets/video/hero.mp4";
import Moto from "./moto";

const Hero = () => {
  const videoRef = useRef();
  // useEffect(() => {
  //   videoRef.current.play();
  // }, []);

  return (
    <div className=" relative w-screen bg-black h-[70%]">
      <img src={hero} alt="" className="w-full h-full object-cover" />
      {/* <video
        src={hero1}
        ref={videoRef}
        loop
        className="w-full h-full object-cover"
      /> */}
      {/* overlay */}
      <div className="absolute top-0 w-full h-full  flex justify-center items-center">
        <Moto
          moto=" Books and doors are the same thing. You open them, and you go through into another world."
          writter="   – Jeanette Winterson"
        />
      </div>
    </div>
  );
};

export default Hero;
