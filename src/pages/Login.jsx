import { Button, TextField, Text, Divider, Icon, Checkbox } from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { Link, useNavigate } from "react-router-dom";
import { ViewMinor, HideMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import { PasswordInputWrapper } from "../styled/inputs";
import { useSelector } from "react-redux";

export const Login = () => {


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isOrganization: false
  })
  const [error, setError] = useState({
    email: "",
    password: "",
    banner: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const title = "Log in";


  console.log(users)

  const handleChange = key => value => {
    setFormData({ ...formData, [key]: typeof value === 'string' ? value.trim() : value });
    console.log(formData)
  };


  const onSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    !formData.email && (errors.email = 'Email field is required');
    !formData.password && (errors.password = 'Please, enter your password.');
    setError(errors)

    const user = users.find(user => user.email === formData.email);
    if(user?.password === formData.password) {

      navigate("/")
    }else setError({banner: true})


    console.log(user);
  };

  return (
    <LoginLayout title={title} onSubmit={onSubmit} error={error.banner}>
      <TextField
        type="email"
        placeholder="example@site.com"
        label="Email:"
        value={formData.email || ""}
        onChange={handleChange("email")}
        autoComplete="email"
        error={error.email || ""}
      />
      <PasswordInputWrapper>
        <TextField
          label="Password:"
          type={showPassword ? "text" : "password"}
          placeholder="*********"
          value={formData.password || ""}
          onChange={handleChange("password")}
          error={error.password || ""}
        />
        <Button
          className="show-password-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Icon source={showPassword ? ViewMinor : HideMinor} color="base" />
        </Button>
      </PasswordInputWrapper>
      <Checkbox
        label="Organization"
        checked={formData.isOrganization || false}
        onChange={handleChange("isOrganization")}
      />
      <Button submit fullWidth primary children="Log In" />
      <Divider />
      <Text alignment="center" variant="headingSm" as="p" color="subdued">
        Or <Link to="/signup"> Join Us</Link>
      </Text>
    </LoginLayout>
  );
};
