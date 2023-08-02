import { StoryObj, Meta } from "@storybook/react";

import Button from "../components/Button/Button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
};

const ButtonStory: Story = {
  args: {
    variant: "fill",
  },
};

export { ButtonStory };
export default meta;
