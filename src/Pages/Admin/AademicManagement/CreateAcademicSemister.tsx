import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../Components/Form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../Components/Form/PHSelect";

const CreateAcademicSemister = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  const nameOptions=[
    {value:'01',label:'Autumn'},
    {value:'02',label:'Summar'},
    {value:'03',label:'Fall'}
  ]
  return (
 <Flex justify="center" align="middle">
     <Col span={6}>
    <PHForm onSubmit={onSubmit}>
      <PHSelect label="Name" name="name" options={nameOptions}/>
      <PHSelect label="Year" name="year"/>
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  </Col>
 </Flex>
  );
};

export default CreateAcademicSemister;
