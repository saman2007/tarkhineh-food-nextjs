import { branchesData } from "@/data/branchesData";

export async function generateStaticParams() {
  return branchesData.map(({ href }) => {
    const splitedHref = href.split("/");

    return { branch: splitedHref[2] };
  });
}

const Page = ({ params }: { params: { branch: string } }) => {
  return <p>{params.branch}</p>;
};

export default Page;
