import TextField, { Props } from "@/components/FormRHF/TextField";
import yup from "@/utilities/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StoryObj, Meta } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";

type Story = StoryObj<typeof TextField>;

const TextFieldExampleCode = (args: Props) => {
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
      <TextField {...args} />
    </FormProvider>
  );
};

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ["autodocs"],
  title: "Components/FormRHFs/TextField",
  parameters: {
    backgrounds: {
      default: "night",
    },
    docs: {
      source: {
        type: `code`,
        code: `
        const TextFieldExampleCode = (args: Props) => {
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
    type: {
      control: "select",
    },
  },
  args: {
    width: 200,
    height: 48,
    name: "email",
  },
};

const WithEmailValidation: Story = {
  args: {
    borderVariant: "normal",
  },
  render: (args) => <TextFieldExampleCode {...args} />,
};

export { WithEmailValidation };
export default meta;
