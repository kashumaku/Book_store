import bg from "../assets/img/bg3.jpg";
import BestBooks from "../components/bestBooks";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Moto from "../components/moto";
import TopBar from "../components/topBar";
const Home = () => {
  return (
    <div className="h-screen relative  ">
      <img
        src={bg}
        alt=""
        className="absolute top-0 -z-10 h-full w-full object-cover"
      />
      {/* overlay */}
      <div className="absolute top-0 w-full h-full bg-gray-600/70 -z-10" />
      {/* Components */}
      <div className="h-full  overflow-scroll">
        <TopBar />
        <Hero />

        <BestBooks />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
