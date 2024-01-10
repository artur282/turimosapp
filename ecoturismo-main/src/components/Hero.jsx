import Home from "./Home";
import Fondo from "../assets/fondoSanJuan.webp";

const Hero = ({ refNav, MoreInfo }) => {
  return (
    <div className="snap-center snap-always">
      <section ref={refNav} className="h-screen px-6 lg:px-2 ">
        <div className="max-w-6xl pt-20 mx-auto sm:pb-0">
          <Home MoreInfo={MoreInfo} />
          <div className="absolute inset-x-0 top-0 overflow-hidden -z-10 transform-gpu sm:">
            <img src={Fondo} className="object-cover w-screen h-screen brightness-75" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
