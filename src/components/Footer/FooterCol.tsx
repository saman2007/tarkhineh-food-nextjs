import { Footer } from "@/data/footerData";
import Responsive from "../Responsive/Responsive";
import Link from "@/Link/Link";

const FooterCol = ({ items, title, icons }: Footer) => {
  return (
    <div className="flex flex-col gap-y-[8px] sd:gap-y-[16px]">
      <h2 className="text-white font-caption-md sd:font-header-5">{title}</h2>
      <div className="flex flex-col gap-y-[4px] sd:gap-y-[16px]">
        {items.map(({ text, href }) => (
          <Link
            href={href}
            key={text}
            className="text-gray-3 font-caption-sm sd:font-caption-lg"
          >
            {text}
          </Link>
        ))}
      </div>
      {icons && (
        <div className="gap-x-[16px] flex">
          {icons.map(({ icon: Icon, href }, index) => (
            <Link href={href} key={index}>
              <Responsive md lg fullLg>
                <Icon width={24} height={24} />
              </Responsive>
              <Responsive sm sd>
                <Icon width={16} height={16} />
              </Responsive>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterCol;
