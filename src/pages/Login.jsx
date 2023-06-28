import { Button, TextField, Text, Divider, Icon, Checkbox } from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { Link } from "react-router-dom";
import { ViewMinor, HideMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import { PasswordInputWrapper } from "../styled/inputs";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isOrganization, setIsOrganization] = useState(false);
  const [error, setError] = useState("");
  const title = "Log in";

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleCheckbox = () => {
    setIsOrganization(!isOrganization);
  };

  const onSubmit = () => {
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    } else if (!password.trim()) {
      setError("Please enter a password.");
      return;
    } else if (password.trim().length < 8) {
      setError("Password should be at least 8 characters long.");
      return;
    }

    setError("");
    console.log("submitted");
  };

  return (
    <LoginLayout title={title} onSubmit={onSubmit}>
      <TextField
        type="email"
        placeholder="example@site.com"
        label="Email:"
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
      <Checkbox
        label="Organization"
        checked={isOrganization}
        onChange={handleCheckbox}
      />
      <Button submit fullWidth primary children="Log In" />
      <Divider />
      <Text alignment="center" variant="headingSm" as="p" color="subdued">
        Or <Link to="/signup"> Join Us</Link>
      </Text>
    </LoginLayout>
  );
};
