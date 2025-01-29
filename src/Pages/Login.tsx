import { Button, Row, Col, Card, Typography } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../Components/Form/PHForm";
import PHInput from "../Components/Form/PHInput";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        id: data.UserId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in successfully", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <Col xs={22} sm={18} md={14} lg={10} xl={8}>
        <Card
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
          }}
        >
          <Title level={2} style={{ textAlign: "center", marginBottom: "24px" }}>
            Login
          </Title>
          <PHForm onSubmit={onSubmit}>
            <PHInput type="text" name="UserId" label="ID"  placeholder="Enter your name" />
            <PHInput type="password" name="password" label="Password"  placeholder="Enter your Password" />
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ marginTop: "16px" }}
            >
              Login
            </Button>
          </PHForm>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;