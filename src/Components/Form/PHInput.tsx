import { Input } from "antd";
import { Controller } from "react-hook-form";
type TPHInputProps={
    type:string;
    name:string;
    label?:string;
}
const PHInput = ({ type, name, label }:TPHInputProps) => {
//   const { register } = useFormContext();
  return (
    <div style={{marginBottom:"20px"}}>
      {label ? label : null}
      <Controller
      name={name}
      render={({field})=>(
        // {...register(name)}
        <Input {...field} type={type} id={name} ></Input>
      )}
      />
  
    </div>
  );
};

export default PHInput;
