import TextFieldUI from "@/components/FormUI/TextFieldUI";
import { StoryObj, Meta } from "@storybook/react";

type Story = StoryObj<typeof TextFieldUI>;

const meta: Meta<typeof TextFieldUI> = {
  component: TextFieldUI,
  tags: ["autodocs"],
  title: "Components/FormUIs/TextFieldUI",
  parameters: {
    backgrounds: {
      default: "night",
    },
  },
  argTypes: {
    borderVariant: {
      control: "select",
    },
    type: {
      control: "select",
    },
  },
  args: {
    width: 200,
    height: 48,
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
