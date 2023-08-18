import Slider from "@/components/Slider/Slider";
import { StoryObj, Meta } from "@storybook/react";

type Story = StoryObj<typeof Slider>;

const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ["autodocs"],
  title: "Components/Slider",
};

const NumberSlider: Story = {
  args: {
    slides: [...Array(5)]
      .map((_, index) => (
        <div
          className="w-full h-[300px] bg-primary flex justify-center items-center"
          key={index}
        >
          <p className="font-header-3 text-tint-4">{index + 1}</p>
        </div>
      ))
      .reverse(),
  },
};

export { NumberSlider };
export default meta;
