import Backdrop from "@/components/Backdrop/Backdrop";
import { StoryObj, Meta } from "@storybook/react";

type Story = StoryObj<typeof Backdrop>;

const meta: Meta<typeof Backdrop> = {
  component: Backdrop,
  tags: ["autodocs"],
  title: "Components/Backdrop",
  args: {
    className: "min-h-[200px] flex",
    onClick: () => {
      console.log("hello :)");
    },
    children: (
      <h1 className="m-auto font-header-5">
        HELLO! LOOK AT CONSOLE AND CLICK ON THE BACKDROP!
      </h1>
    ),
  },
};

const BackdropExample: Story = {};

export { BackdropExample };
export default meta;
