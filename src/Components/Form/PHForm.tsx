
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
type TFormProps={
    onSubmit:SubmitHandler<FieldValues>;
    children:ReactNode;
} & TFormConfig
type TFormConfig={
  resolver?:any;
}
const PHForm = ({ onSubmit, children,resolver }:TFormProps) => {
  const formConfig : TFormConfig ={};
  if(resolver){
    formConfig['resolver']=resolver;
  }
  const methods = useForm(formConfig);
  return (
    

    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
 
  );
};

export default PHForm;
