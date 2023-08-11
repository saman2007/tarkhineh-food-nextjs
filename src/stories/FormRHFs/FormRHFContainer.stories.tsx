import FormRHFContainer from "@/components/FormRHF/FormRHFContainer";
import TextAreaUI from "@/components/FormUI/TextAreaUI";
import yup from "@/utilities/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StoryObj, Meta } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";

type Story = StoryObj<typeof FormRHFContainer>;

const FormRHFContainerExample = () => {
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
      <FormRHFContainer
        name="email"
        field={(data) => <TextAreaUI {...data} displayError={true} />}
      />
    </FormProvider>
  );
};

const meta: Meta<typeof FormRHFContainer> = {
  component: FormRHFContainer,
  tags: ["autodocs"],
  title: "Components/FormRHFs/FormRHFContainer",
  parameters: {
    backgrounds: {
      default: "night",
    },
    docs: {
      source: {
        type: `code`,
        code: `
        const FormRHFContainerExample = () => {
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
              <FormRHFContainer
                name="email"
                field={(data) => <TextAreaUI {...data} displayError={true} />}
              />
            </FormProvider>
          );
        };
        `,
      },
    },
  },
  render: () => <FormRHFContainerExample />,
};

const WithEmailValidation: Story = {};

export { WithEmailValidation };
export default meta;
