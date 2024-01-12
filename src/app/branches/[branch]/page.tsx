import BrnahcSlider from "@/components/PagesComponents/Branch/Slider/BranchSlider";
import { branchesData } from "@/data/branchesData";
import { SlidesPages } from "@/lib/queries/global/interfaces";

export async function generateStaticParams() {
  return branchesData.map(({ href }) => {
    const splitedHref = href.split("/");

    return { branch: splitedHref[2] };
  });
}

export const dynamicParams = false;

const Page = ({ params }: { params: { branch: string } }) => {
  const branchURL = ("/branches/" + params.branch) as keyof typeof SlidesPages;

  return (
    <>
      <BrnahcSlider branchURL={branchURL} />
    </>
  );
};

export default Page;
