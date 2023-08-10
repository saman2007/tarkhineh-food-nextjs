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
  },
  args: {
    width: 200,
    height: 150,
  },
};

const Normal: Story = {
  args: {
    borderVariant: "normal",
  },
};

const Success: Story = {
  args: {
    borderVariant: "success",
  },
};

const Error: Story = {
  args: {
    borderVariant: "error",
  },
};

export { Normal, Success, Error };
export default meta;
