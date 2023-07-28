import "./globals.css";
import "react-aspect-ratio/aspect-ratio.css";
import "react-toastify/dist/ReactToastify.css";
import { optimizedFonts } from "@/utilities/fonts";
import Header from "@/components/Header/Header";
import BackdropContext from "@/contexts/BackdropContext";
import Spacer from "@/components/Spacer/Spacer";
import Footer from "@/components/Footer/Footer";
import ServerActionsSituationContext from "@/contexts/ServerActionsSituationContext";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${optimizedFonts.variable} w-full h-full`}
    >
      <body className="font-estedad font-body-sm sm:font-body-md md:font-body-lg lg:font-body-xl w-full h-full">
        <div id="modal-root"></div>
        <ServerActionsSituationContext>
          <BackdropContext>
            <ToastContainer
              position="top-right"
              bodyStyle={{ direction: "rtl" }}
              bodyClassName="font-body-md"
              className="max-[480px]:!right-[10px] max-[480px]:!left-[10px] max-[480px]:!top-[10px] max-[480px]:!w-[unset]"
              toastClassName="max-[480px]:!rounded-4"
            />
            <div className="flex flex-col justify-between">
              <div>
                <Header />
                <Spacer height={115} />
                {children}
              </div>
              <Footer />
            </div>
          </BackdropContext>
        </ServerActionsSituationContext>
      </body>
    </html>
  );
}
