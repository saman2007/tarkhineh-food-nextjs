import { StoryObj, Meta } from "@storybook/react";

import Button from "@/components/Button/Button";
import { ButtonProps } from "@/global/interfaces/interfaces";
import { VariantsType } from "@/data/variants/Button";

type Story = StoryObj<typeof Button>;

//TODO: add reactive variant and color variant
/** a Button component with different variants */
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
    },
  },
};

const defaultArgs: ButtonProps<VariantsType> & { children?: React.ReactNode } =
  {
    height: 48,
    width: 100,
    radiusVariant: 4,
    children: "Button!",
    colorVariant: "primary",
  };

const Normal: Story = {
  args: {
    ...defaultArgs,
    variant: "normal",
  },
  argTypes: {
    variant: {
      options: ["normal"],
    },
    colorVariant: {
      options: ["primary"] as ButtonProps<"normal">["colorVariant"][],
    },
  },
  parameters: {
    backgrounds: {
      default: "dawn",
    },
  },
};

const Fill: Story = {
  args: {
    ...defaultArgs,
    variant: "fill",
  },
  argTypes: {
    variant: {
      options: ["fill"],
    },
    colorVariant: {
      options: ["primary"] as ButtonProps<"fill">["colorVariant"][],
    },
  },
  parameters: {
    backgrounds: {
      default: "morning",
    },
  },
};

const Outline: Story = {
  args: {
    ...defaultArgs,
    variant: "outline",
  },
  argTypes: {
    variant: {
      options: ["outline"],
    },
    colorVariant: {
      options: [
        "primary",
        "secondary",
        "tertiary",
      ] as ButtonProps<"outline">["colorVariant"][],
    },
  },
  parameters: {
    backgrounds: {
      default: "night",
    },
  },
};

export { Fill, Normal, Outline };
export default meta;
