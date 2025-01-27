import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
    const {register,handleSubmit}= useForm();
 const dispatch = useAppDispatch();
    const [login,{error}]=useLoginMutation();

    
    const onSubmit =async (data)=>{
        const userInfo ={
            id:data.id,
            password:data.password
        }
     const res = await login(userInfo).unwrap();
     const user = verifyToken(res.data.accessToken)
     console.log("res=>",res);
     dispatch(setUser({user:user,token:res.data.accessToken}))
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


