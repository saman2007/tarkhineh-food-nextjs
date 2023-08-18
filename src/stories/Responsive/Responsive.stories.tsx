import Button from "@/components/Button/Button";
import Responsive from "@/components/Responsive/Responsive";
import { StoryObj, Meta } from "@storybook/react";

type Story = StoryObj<typeof Responsive>;

const meta: Meta<typeof Responsive> = {
  component: Responsive,
  tags: ["autodocs"],
  title: "Components/Responsive",
};

const ResponsiveButton: Story = {
  args: {
    sm: true,
    sd: true,
    md: true,
    lg: true,
    fullLg: true,
  },
  render: (args) => (
    <Responsive {...args}>
      <Button variant="fill" radiusVariant={4} colorVariant="primary">
        This Is A Responsive Button!
      </Button>
    </Responsive>
  ),
};

export { ResponsiveButton };
export default meta;
