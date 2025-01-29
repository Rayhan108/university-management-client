import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../Components/Form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../Components/Form/PHSelect";

const CreateAcademicSemister = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
 <Flex justify="center" align="middle">
     <Col span={6}>
    <PHForm onSubmit={onSubmit}>
      {/* <PHInput type="text" name="name" label="name" />
      <PHInput type="date" name="year" label="year" /> */}
      <PHSelect label="name"/>
      <PHSelect label="year"/>
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  </Col>
 </Flex>
  );
};

export default CreateAcademicSemister;
