import { Button, TextField, Text, Divider, Icon, Checkbox } from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { Link, useNavigate } from "react-router-dom";
import { ViewMinor, HideMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import { PasswordInputWrapper } from "../styled/inputs";
import { useDispatch, useSelector } from "react-redux";
import { Space } from "../styled/profilee";
import { login } from "../redux/slices/accountSlice";

export const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isOrganization: false
  })
  const [error, setError] = useState({
    email: "",
    password: "",
    checked: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const title = "Welcome Back";

  const handleChange = key => value => {
    setFormData({ ...formData, [key]: typeof value === 'string' ? value.trim() : value });
  };

  const onSubmit = () => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};
    (formData.email && !emailPattern.test(formData.email)) && (errors.email = 'Invalid Email Format');
    !formData.email && (errors.email = 'Email field is required');
    !formData.password && (errors.password = 'Please, enter your password.');
    setError(errors)

    if (formData.email && emailPattern.test(formData.email) && formData.password) {
      const user = users.find(user => user.email === formData.email)
      if (user?.password === formData.password) {
        navigate("/");
        dispatch(login(user))
      } else setError({ checked: true })
    }
  };

  return (
    <LoginLayout title={title} onSubmit={onSubmit}>
      {
        error.checked && <Text color="critical" children="Email or password is invalid" />
      }
      <TextField
        type="text"
        placeholder="example@site.com"
        label="Email:"
        value={formData.email || ""}
        onChange={handleChange("email")}
        autoComplete="email"
        error={error.email}
      />
      <PasswordInputWrapper>
        <TextField
          label="Password:"
          type={showPassword ? "text" : "password"}
          placeholder="*********"
          value={formData.password || ""}
          onChange={handleChange("password")}
          error={error.password}
        />
        <Button
          className="show-password-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Icon source={showPassword ? ViewMinor : HideMinor} color="base" />
        </Button>
      </PasswordInputWrapper>
      <Space>
        <Checkbox
          label="Organization"
          checked={formData.isOrganization || false}
          onChange={handleChange("isOrganization")}
        />
        <Link to="#">Forgot Password?</Link>
      </Space>

      <Button submit fullWidth primary children="Log In" />
      <Divider />
      <Text alignment="center" variant="headingSm" as="p" color="subdued">
        Don't have an account? <Link to="/signup"> Join Us</Link>
      </Text>
    </LoginLayout>
  );
};
