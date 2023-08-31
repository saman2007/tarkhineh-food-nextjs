"use client";

import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import Responsive from "@/components/Responsive/Responsive";
import { branchesData } from "@/data/branchesData";
import { ArrowLeft2 } from "iconsax-react";
import { useState } from "react";
import BranchItem from "./BranchItem";

const ChooseBranch = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="mt-[8px] sd:mt-[16px] flex justify-end">
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contentContainerClasses="mt-[48px]"
        title="انتخاب شعبه"
      >
        <p className="text-center mb-[20px]">
          برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:
        </p>
        <div className="gap-x-[20px] gap-y-[15px] justify-center grid-cols-[repeat(auto-fit,100%)] grid sd:grid-cols-[repeat(auto-fit,175px)]">
          {branchesData.map((data) => (
            <BranchItem key={data.name} {...data} />
          ))}
        </div>
      </Modal>
      <Responsive md lg fullLg>
        <Button
          variant="outline"
          radiusVariant={4}
          width={184}
          height={40}
          fontVariant="captionMdAndBtnLg"
          className="gap-x-[8px]"
          colorVariant="primary"
          onClick={openModalHandler}
        >
          اطلاعات بیشتر
          <ArrowLeft2 size={24} />
        </Button>
      </Responsive>
      <Responsive sm sd>
        <Button
          variant="outline"
          radiusVariant={4}
          width={152}
          height={32}
          fontVariant="captionMdAndBtnLg"
          colorVariant="primary"
          onClick={openModalHandler}
        >
          اطلاعات بیشتر
        </Button>
      </Responsive>
    </div>
  );
};

export default ChooseBranch;
