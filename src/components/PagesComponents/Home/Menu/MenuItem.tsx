import LinkButton from "@/components/LinkButton/LinkButton";
import Responsive from "@/components/Responsive/Responsive";
import { MenuData } from "@/data/menuData";
import Image from "next/image";

const MenuItem = ({ name, image, href }: MenuData) => {
  return (
    <div className="flex relative mx-auto w-[152px] sd:w-[280px] group flex-col items-center justify-between">
      <div className="w-[152px] sd:w-[280px] absolute bottom-0 flex-col transition duration-200 h-[81px] sd:h-[180px] group-hover:shadow-card-shadow gap-[22px] justify-end gap-y-[37px] flex items-center rounded-8 border border-primary"></div>
      <div className="w-[102px] h-[100px] relative sd:w-auto sd:h-auto">
        <Image
          width={240}
          height={240}
          src={image}
          alt={name}
          className="z-[1]"
        />
      </div>
      <Responsive md lg fullLg>
        <LinkButton
          variant="fill"
          radiusVariant={4}
          href={href}
          width={155}
          height={48}
          className="relative block bottom-0 translate-y-[20px]"
          colorVariant="primary"
        >
          {name}
        </LinkButton>
      </Responsive>
      <Responsive sm sd>
        <LinkButton
          variant="fill"
          radiusVariant={4}
          href={href}
          width={71}
          height={32}
          className="relative block bottom-0 translate-y-[15px]"
          colorVariant="primary"
        >
          {name}
        </LinkButton>
      </Responsive>
    </div>
  );
};

export default MenuItem;
