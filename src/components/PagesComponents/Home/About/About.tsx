import Container from "@/components/Container/Container";
import bg from "@/static/about-bg.png";
import Image from "next/image";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const About = () => {
  return (
    <div className="my-[48px] w-full min-h-[390px] overflow-hidden relative">
      <Image
        src={bg}
        alt="درباره ما"
        className="top-2/4 block left-2/4 -translate-x-2/4 -translate-y-2/4 absolute max-w-[unset]"
      />
      <div className="z-[2] bg-[#00000060] backdrop-blur-[4px] min-h-[390px] relative px-20 sd:px-24 py-16 sd:py-48">
        <Container
          variant="lg"
          className="flex justify-between flex-col md:flex-row items-center gap-y-[42px] sd:gap-y-[24px]"
        >
          <RightSection />
          <LeftSection />
        </Container>
      </div>
    </div>
  );
};

export default About;
