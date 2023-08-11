import TextArea, { Props } from "@/components/FormRHF/TextArea";
import yup from "@/utilities/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StoryObj, Meta } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";

type Story = StoryObj<typeof TextArea>;

const TextAreaExampleCode = (args: Props) => {
  const emailValidation = yup.object().shape({
    email: yup.string().email().required(),
  });

  const methods = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(emailValidation),
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <TextArea {...args} />
    </FormProvider>
  );
};

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  tags: ["autodocs"],
  title: "Components/FormRHFs/TextArea",
  parameters: {
    backgrounds: {
      default: "night",
    },
    docs: {
      source: {
        type: `code`,
        code: `
        const TextAreaExampleCode = (args: Props) => {
          const emailValidation = yup.object().shape({
            email: yup.string().email().required(),
          });
        
          const methods = useForm({
            defaultValues: {
              email: "",
            },
            resolver: yupResolver(emailValidation),
            mode: "onChange",
          });
        
          return (
            <FormProvider {...methods}>
              <TextArea {...args} />
            </FormProvider>
          );
        };
        `,
      },
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
    name: "email",
  },
};

const WithEmailValidation: Story = {
  args: {
    borderVariant: "normal",
  },
  render: (args) => <TextAreaExampleCode {...args} />,
};

export { WithEmailValidation };
export default meta;
