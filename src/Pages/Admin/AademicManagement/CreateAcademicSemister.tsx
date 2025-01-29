import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../Components/Form/PHForm";
import PHInput from "../../../Components/Form/PHInput";
import { Button } from "antd";

const CreateAcademicSemister = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name" />
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateAcademicSemister;
