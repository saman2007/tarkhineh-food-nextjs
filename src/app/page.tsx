import About from "@/components/PagesComponents/Home/About/About";
import Branches from "@/components/PagesComponents/Home/Branches/Branches";
import Menu from "@/components/PagesComponents/Home/Menu/Menu";
import HomeSlider from "@/components/PagesComponents/Home/Slider/HomeSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Menu />
      <About />
      <Branches />
    </>
  );
};

export default Home;
