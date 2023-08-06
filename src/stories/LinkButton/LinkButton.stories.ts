import { StoryObj, Meta } from "@storybook/react";
import { ButtonProps, CustomLinkProps } from "@/global/interfaces/interfaces";
import { VariantsType, colorVariants, variants } from "@/data/variants/Button";
import LinkButton from "@/components/LinkButton/LinkButton";

type Story = StoryObj<typeof LinkButton>;

const defaultArgs: ButtonProps<VariantsType> & CustomLinkProps = {
  height: 48,
  width: 150,
  radiusVariant: 4,
  children: "Link Button!",
  href: "/page/test",
  onMouseEnter: undefined,
  onTouchStart: undefined,
  onClick: undefined,
};

const allColorVariantsField = Object.keys(colorVariants).reduce(
  (prevValue, currentValue) => {
    const prevValueLength = Object.keys(prevValue).length;
    const currentValueLength = Object.keys(currentValue).length;

    if (currentValueLength > prevValueLength) return currentValue;

    return prevValue;
  }
) as keyof typeof variants;

/** a LinkButton component with UI of Button component and Next Link component with different variants */
const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  tags: ["autodocs"],
  args: defaultArgs,
  title: "Components/LinkButton",
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
