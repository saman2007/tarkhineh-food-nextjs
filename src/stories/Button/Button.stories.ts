import { StoryObj, Meta } from "@storybook/react";

import Button from "@/components/Button/Button";
import { ButtonProps } from "@/global/interfaces/interfaces";
import { VariantsType, colorVariants, variants } from "@/data/variants/Button";

type Story = StoryObj<typeof Button>;

const defaultArgs: ButtonProps<VariantsType> & { children?: React.ReactNode } =
  {
    height: 48,
    width: 100,
    radiusVariant: 4,
    children: "Button!",
  };

const allColorVariantsField = Object.keys(colorVariants).reduce(
  (prevValue, currentValue) => {
    const prevValueLength = Object.keys(prevValue).length;
    const currentValueLength = Object.keys(currentValue).length;

    if (currentValueLength > prevValueLength) return currentValue;

    return prevValue;
  }
) as keyof typeof variants;

/** a Button component with different variants */
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  args: defaultArgs,
  title: "Components/Button",
  argTypes: {
    variant: {
      control: "select",
    },
    colorVariant: {
      options: Object.keys(colorVariants[allColorVariantsField]),
    },
    fontVariant: {
      control: "select",
    },
    radiusVariant: {
      control: "select",
    },
  },
};

const Normal: Story = {
  args: {
    variant: "normal",
    colorVariant: "primary",
  },
  parameters: {
    backgrounds: {
      default: "dawn",
    },
  },
};

const Fill: Story = {
  args: {
    variant: "fill",
    colorVariant: "primary",
  },
  parameters: {
    backgrounds: {
      default: "morning",
    },
  },
};

const Outline: Story = {
  args: {
    variant: "outline",
    colorVariant: "primary",
  },
  parameters: {
    backgrounds: {
      default: "night",
    },
  },
};

export { Normal, Fill, Outline };
export default meta;
