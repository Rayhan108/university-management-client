import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
   placeholder?:string;
disabled?:boolean;
mode?: 'multiple' | undefined;
};

const PHSelect = ({ label, name,options, placeholder,disabled,mode }: TSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field ,fieldState:{error}}) => (
        <Form.Item label={label}>
          <Select
           mode={mode}
            style={{ width: "100%" }}
            {...field}
            options={options}
            size={"large"}
            placeholder={placeholder}
           disabled={disabled}
          />
        {error && <small style={{color:"red",marginTop:"3px"}}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
