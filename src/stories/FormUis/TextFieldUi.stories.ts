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
