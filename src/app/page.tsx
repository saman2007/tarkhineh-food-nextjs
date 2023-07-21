import About from "@/components/PagesComponents/Home/About/About";
import Menu from "@/components/PagesComponents/Home/Menu/Menu";
import HomeSlider from "@/components/PagesComponents/Home/Slider/HomeSlider";

const Home = async () => {
  return (
    <>
      <HomeSlider />
      <Menu />
      <About />
    </>
  );
};

export default Home;
