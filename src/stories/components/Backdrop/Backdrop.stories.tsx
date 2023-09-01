import Backdrop from "@/components/Backdrop/Backdrop";
import { StoryObj, Meta } from "@storybook/react";

type Story = StoryObj<typeof Backdrop>;

const meta: Meta<typeof Backdrop> = {
  component: Backdrop,
  tags: ["autodocs"],
  title: "Components/Backdrop",
  args: {
    className: "flex",
    onClick: () => {
      console.log("hello :)");
    },
    children: (
      <h1 className="m-auto font-header-5">
        HELLO! LOOK AT CONSOLE AND CLICK ON THE BACKDROP!
      </h1>
    ),
  },
  decorators: [(storyFn) => <div className="h-[300px]">{storyFn()}</div>],
};

const BackdropExample: Story = {};

export { BackdropExample };
export default meta;
