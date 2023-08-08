import { footerData } from "@/data/footerData";
import footerBg from "@/static/footer-bg.jpg";
import FooterCol from "./FooterCol";
import FooterFormCol from "./FooterFormCol";
import Container from "../Container/Container";

const Footer = () => {
  const footerCols = footerData.map((colData, index) => (
    <FooterCol {...colData} key={index} />
  ));

  return (
    <footer
      className="mt-[48px] bg-center min-h-[152px] sd:min-h-[320px] w-full flex p-48"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), linear-gradient(0deg, rgba(33, 64, 43, 0.50) 0%, rgba(33, 64, 43, 0.50) 100%), url('${footerBg.src}') lightgray center / cover no-repeat`,
        backgroundBlendMode: "normal, overlay, normal",
      }}
    >
      <Container
        size="lg"
        className="flex justify-between md:items-center gap-x-[20px] gap-y-[30px] flex-wrap h-full w-full"
      >
        {footerCols}
        <FooterFormCol />
      </Container>
    </footer>
  );
};

export default Footer;
