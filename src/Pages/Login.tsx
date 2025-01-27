import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const navigate = useNavigate();
    const {register,handleSubmit}= useForm();
 const dispatch = useAppDispatch();
    const [login]=useLoginMutation();

    
    const onSubmit =async (data:FieldValues)=>{
  const toastId=toast.loading("Loggin in processes")
  try{
    const userInfo ={
        id:data.id,
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
        <form onSubmit={handleSubmit(onSubmit)}>
           <div>
          <label htmlFor="id">ID</label>
          <input type="text" id="id" {...register('id')}></input>
           </div>
           <div>
          <label htmlFor="id">Password</label>
          <input type="text" id="password" {...register('password')}></input>
           </div>
           <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;


