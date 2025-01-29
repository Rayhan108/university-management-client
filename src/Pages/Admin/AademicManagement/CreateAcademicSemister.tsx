import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../Components/Form/PHForm";

import { Button, Card, Col, Flex, Typography } from "antd";
import PHSelect from "../../../Components/Form/PHSelect";
import { nameOptions } from "../../../constants/semister";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemisterSchema } from "../../../schemas/academicManagement.schemas";
import { useCreateASemisterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { TAcademicSemester } from "../../../types/academicManagement.type";
const { Title } = Typography;
const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
const CreateAcademicSemister = () => {
  const [ createASemister] = useCreateASemisterMutation();
  const onSubmit: SubmitHandler<FieldValues> =async (data) => {
    // console.log(data);
    const toastId = toast.loading("Semister Creating...")
    const name = nameOptions[Number(data.name) - 1].label;
    const semisterData = {
      name,
      code: data.name,
      year:data.year,
      startMonth:data.startMonth,
      endMonth:data.endMonth
    };
    try{
      console.log(semisterData);
      const res = await createASemister(semisterData) as TResponse<TAcademicSemester[]>
console.log(res);
if(res?.error){
  toast.error(res?.error?.data?.message,{id:toastId})
}else{
  toast.success("Semister Created",{id:toastId})
}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }catch(err){
toast.error("Something went wrong",{id:toastId})
    }
  };

  return (
    // <Flex justify="center" align="middle">
    //   <Col span={6}>
    //     <PHForm onSubmit={onSubmit}>
    //       <PHSelect label="Name" name="name" options={nameOptions} />
    //       <PHSelect label="Year" name="year" options={yearOptions} />
    //       <PHSelect
    //         label="Start Month"
    //         name="startMonth"
    //         options={monthOptions}
    //       />
    //       <PHSelect label="End Month" name="endMonth" options={monthOptions} />

    //       <Button htmlType="submit">Submit</Button>
    //     </PHForm>
    //   </Col>
    // </Flex>
    <Flex justify="center" align="middle" style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
    <Col xs={24} sm={20} md={16} lg={12} xl={8}>
      <Card
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
        }}
      >
        <Title level={2} style={{ textAlign: "center", marginBottom: "24px" }}>
          Create Academic Semester
        </Title>
        <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemisterSchema)}>
          <PHSelect
            label="Name"
            name="name"
            options={nameOptions}
            placeholder="Select semester name"
      
          />
          <PHSelect
            label="Year"
            name="year"
            options={yearOptions}
            placeholder="Select year"
        
          />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
            placeholder="Select start month"
        
          />
          <PHSelect
            label="End Month"
            name="endMonth"
            options={monthOptions}
            placeholder="Select end month"
         
          />
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ marginTop: "16px" }}
          >
            Submit
          </Button>
        </PHForm>
      </Card>
    </Col>
  </Flex>
  );
};

export default CreateAcademicSemister;
