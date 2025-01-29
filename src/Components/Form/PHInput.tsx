import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TPHInputProps={
    type:string;
    name:string;
    label?:string;
     placeholder?:string;
}
const PHInput = ({ type, name, label, placeholder }:TPHInputProps) => {
//   const { register } = useFormContext();
  return (
    <div style={{marginBottom:"20px"}}>

      <Controller
      name={name}
      render={({field})=>(
        <Form.Item label={label} >
        {/* {...register(name)} */}
          <Input {...field} type={type} id={name} size={"large"} placeholder={placeholder}/>
        </Form.Item>
      )}
      />
  
    </div>
  );
};

export default PHInput;
