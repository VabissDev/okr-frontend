<<<<<<< HEAD
import { Button, TextField, Text, Divider, Icon } from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { Link } from "react-router-dom";
import { ViewMinor, HideMinor } from "@shopify/polaris-icons";
=======
import { Button, TextField, Text, Divider, Icon, Checkbox, Box, Banner } from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { Link, useNavigate } from "react-router-dom";
import { ViewMinor, HideMinor, CircleAlertMajor } from "@shopify/polaris-icons";
>>>>>>> origin/master
import { useState } from "react";
import { PasswordInputWrapper } from "../styled/inputs";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const title = "Log in";

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const onSubmit = () => {
<<<<<<< HEAD
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    } else if (!password.trim()) {
      setError("Please enter a password.");
      return;
    } else if (password.trim().length < 8) {
      setError("Password should be at least 8 characters long.");
      return;
=======

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};
    (formData.email && !emailPattern.test(formData.email)) && (errors.email = 'Invalid Email Format');
    !formData.email && (errors.email = 'Email field is required');
    !formData.password && (errors.password = 'Please, enter your password.');
    setError(errors)

    if (formData.email && emailPattern.test(formData.email) && formData.password) {
      const user = users.find(user => user.email === formData.email)
      if (user?.password === formData.password) {
        navigate("/organization");
        dispatch(login(user))
        console.log(user, "login")
      } else setError({ checked: true })
>>>>>>> origin/master
    }

    setError("");
    console.log("submitted");
  };

  return (
    <LoginLayout title={title} onSubmit={onSubmit}>
<<<<<<< HEAD
=======
      {
        error.checked &&
        <Banner status="critical">
          <Text color="critical" children="Email or password is invalid" />
        </Banner>
      }
>>>>>>> origin/master
      <TextField
        type="email"
        placeholder="example@site.com"
        label="Username / Email:"
        value={email}
        onChange={handleEmailChange}
        autoComplete="email"
        error={error && error.includes("email") ? error : ""}
      />
      <PasswordInputWrapper>
        <TextField
          label="Password:"
          type={showPassword ? "text" : "password"}
          placeholder="*********"
          value={password}
          onChange={handlePasswordChange}
          error={error && error.toLowerCase().includes("password") ? error : ""}
        />
        <Button
          className="show-password-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Icon source={showPassword ? ViewMinor : HideMinor} color="base" />
        </Button>
      </PasswordInputWrapper>
      <Button submit fullWidth primary children="Log In" />
      <Divider />
      <Text alignment="center" variant="headingSm" as="p" color="subdued">
        Or <Link to="/signup"> Sign Up</Link>
      </Text>
    </LoginLayout>
  );
};
