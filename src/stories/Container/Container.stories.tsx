import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import { sizes } from "@/data/variants/Container";
import { StoryObj, Meta } from "@storybook/react";

type Story = StoryObj<typeof Container>;

const meta: Meta<typeof Container> = {
  component: Container,
  tags: ["autodocs"],
  title: "Components/Container",
  args: {
    className: "flex justify-between",
  },
  argTypes: {
    size: {
      options: Object.keys(sizes),
    },
  },
};

const Large: Story = {
  args: {
    size: "lg",
  },
  parameters: {
    backgrounds: {
      default: "night",
    },
  },
  render: (args) => (
    <Container {...args}>
      <Button variant="outline" colorVariant="primary" radiusVariant={4}>
        left
      </Button>
      <Button variant="outline" colorVariant="primary" radiusVariant={4}>
        right
      </Button>
    </Container>
  ),
};

export { Large };
export default meta;
