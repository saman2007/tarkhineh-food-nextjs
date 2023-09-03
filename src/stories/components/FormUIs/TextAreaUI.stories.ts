import TextAreaUI from "@/components/FormUI/TextAreaUI";
import { StoryObj, Meta } from "@storybook/react";

type Story = StoryObj<typeof TextAreaUI>;

const meta: Meta<typeof TextAreaUI> = {
  component: TextAreaUI,
  tags: ["autodocs"],
  title: "Components/FormUIs/TextAreaUI",
  parameters: {
    backgrounds: {
      default: "night",
    },
  },
  argTypes: {
    borderVariant: {
      control: "select",
    },
    variant: {
      control: "select",
    },
  },
  args: {
    width: 200,
    height: 150,
  },
};

const Primary: Story = {
  args: {
    variant: "primary",
  },
};

const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export { Primary, Secondary };
export default meta;
