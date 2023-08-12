import IconChip from "@/components/IconChip/IconChip";
import { StoryObj, Meta } from "@storybook/react";
import { User } from "iconsax-react";

type Story = StoryObj<typeof IconChip>;

const meta: Meta<typeof IconChip> = {
  component: IconChip,
  args: {
    children: (
      <User
        size={24}
        className="text-primary w-[16px] sd:w-[unset] h-[16px] sd:h-[unset]"
      />
    ),
  },
  tags: ["autodocs"],
  title: "Components/IconChip",
};

const IconChipStory: Story = {};

export { IconChipStory };
export default meta;
