import { Button } from "antd";
import { FieldValues} from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../Components/Form/PHForm";
import PHInput from "../Components/Form/PHInput";

const Login = () => {
    const navigate = useNavigate();
    // const {register,handleSubmit}= useForm();

 const dispatch = useAppDispatch();
    const [login]=useLoginMutation();

    
    const onSubmit =async (data:FieldValues)=>{
  const toastId=toast.loading("Loggin in processes")
  try{
    const userInfo ={
        id:data.UserId,
        password:data.password
    }
 const res = await login(userInfo).unwrap();
 const user = verifyToken(res.data.accessToken) as TUser
 console.log("res=>",res);
 dispatch(setUser({user:user,token:res.data.accessToken}))
 toast.success("Logged in",{id:toastId,duration:2000})
 navigate(`/${user.role}/dashboard`)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }catch(error){
   
    toast.error("something went wrong",{id:toastId,duration:2000})
  }
    }
    return (
        <PHForm onSubmit={onSubmit}>
           <div>

     <PHInput type="text" name="UserId" label="ID"/>
           </div>
           <div>

          <PHInput type="text" name="password" label="Password"/>
           </div>
           <Button htmlType="submit">Login</Button>
        </PHForm>
    );
};

export default Login;


