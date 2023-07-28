import { branchesData } from "@/data/branchesData";
import BranchItem from "./BranchItem";

const Branches = () => {
  const branches = branchesData.map((data, index) => (
    <BranchItem {...data} key={index} />
  ));

  return (
    <div className="mt-[48px]">
      <h2 className="font-header-4 sd:font-header-4 text-center mb-[12px] sd:mb-[24px]">
        ترخینه گردی
      </h2>
      <div className="grid-cols-[repeat(auto-fit,100%)] grid sd:grid-cols-[repeat(auto-fit,288px)] justify-center gap-y-[12px] sd:gap-[24px] p-8">
        {branches}
      </div>
    </div>
  );
};

export default Branches;
