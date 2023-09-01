import Button from "@/components/Button/Button";
import Modal, { Props } from "@/components/Modal/Modal";
import { StoryObj, Meta } from "@storybook/react";
import { useState } from "react";

type Story = StoryObj<typeof Modal>;

const ModalExampleComponent = (args: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button variant="fill" onClick={() => setIsModalOpen((prev) => !prev)}>
        Open The Modal
      </Button>
      <div id="modal-root" className="h-[500px]">
        <Modal
          {...args}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        ></Modal>
      </div>
    </>
  );
};

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
  title: "Components/Modal",
  args: {
    title: "Modal Example",
    contentContainerClasses: "h-[400px] flex justify-center items-center",
    children: "some content",
    mode: "storybook",
  },
  parameters: {
    docs: {
      source: {
        type: `code`,
        code: `
//In app usage example
const ModalExampleComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
        
    return (
        <>
            <Button variant="fill" onClick={() => setIsModalOpen((prev) => !prev)}>
                Open The Modal
            </Button>
            <Modal
              isOpen={isModalOpen}
              setIsOpen={setIsModalOpen}
              contentContainerClasses="h-[400px] flex justify-center items-center"
              title="Modal Example"
            >
              some content
            </Modal>
        </>
    );
};`,
      },
    },
  },
  render: (args) => <ModalExampleComponent {...args} />,
};

const ModalExample: Story = {};

export { ModalExample };
export default meta;
