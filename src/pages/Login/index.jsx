import {
  Button,
  TextField,
  Text,
  Divider,
  Icon,
  Banner,
  Spinner,
} from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { Link, useNavigate } from "react-router-dom";
import { ViewMinor, HideMinor } from "@shopify/polaris-icons";
import { useEffect, useState } from "react";
import { PasswordInputWrapper } from "@/styled/inputs";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/slices/accountSlice";
import {
  clearState,
  loginUser,
  userSelector,
} from "../../redux/slices/AuthSlice";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export const Login = () => {
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const title = "Welcome Back";

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [pwd, setPwd] = useState("");
  const [pwdError, setPwdError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [validFormData, setValidFormData] = useState(false);

  const hanleEmailChange = (value) => setEmail(value.trim());
  const hanlePwdChange = (value) => setPwd(value.trim());

  const handleSubmit = () => {
    const validEmail = EMAIL_REGEX.test(email);

    setEmailError(!validEmail ? "Invalid Email Format" : "");
    setPwdError(!pwd ? "Password field is required" : "");
    !email && setEmailError("Email field is required");

    // if (validEmail && pwd) {
    //   const user = users.find((user) => user.email === email);
    //   if (user?.password === pwd) {
    //     navigate("/organization");
    //     dispatch(login(user));
    //   } else setValidFormData(true);
    // }
    const data = {
      email,
      password: pwd,
    };
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      console.log(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      navigate("/organization");
    }
  }, [isError, isSuccess]);

  return (
    <LoginLayout title={title} onSubmit={handleSubmit}>
      <Toaster />
      {validFormData && (
        <Banner status="critical">
          <Text color="critical" children="Email or password is invalid" />
        </Banner>
      )}
      <TextField
        type="text"
        placeholder="example@site.com"
        label="Email:"
        value={email}
        onChange={hanleEmailChange}
        autoComplete="email"
        error={emailError}
      />
      <PasswordInputWrapper>
        <TextField
          label="Password:"
          type={showPassword ? "text" : "password"}
          placeholder="*********"
          value={pwd}
          onChange={hanlePwdChange}
          error={pwdError}
        />
        <Button
          className="show-password-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Icon source={showPassword ? ViewMinor : HideMinor} color="base" />
        </Button>
      </PasswordInputWrapper>
      <Link to="#">Forgot Password?</Link>

      <Button submit fullWidth primary>
        {isFetching ? <Spinner size="small" /> : "Login"}
      </Button>
      <Divider />
      <Text alignment="center" variant="headingSm" as="p" color="subdued">
        Don't have an account? <Link to="/signup"> Join Us</Link>
      </Text>
    </LoginLayout>
  );
};
