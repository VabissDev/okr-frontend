import React, { useState } from "react";
import { Button, TextField, Text, Divider, Icon } from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { Link } from "react-router-dom";
import { ViewMajor } from "@shopify/polaris-icons";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const title = "Log in";
  const onSubmit = () => {
    setEmail("");
    setPassword("");
    console.log("submitted");
  };

  return (
    <LoginLayout title={title} onSubmit={onSubmit}>
      <TextField
        type="email"
        placeholder="example@site.com"
        label="Username / Email:"
        value={email}
        onChange={handleEmailChange}
        autoComplete="email"
      />
      <TextField
        label="Password:"
        type="password"
        placeholder="*********"
        onChange={handlePasswordChange}
        value={password}
      />
      <Icon source={ViewMajor} color="base" />
      <Button submit fullWidth primary children="Log In" />
      <Divider />
      <Text alignment="center" variant="headingSm" as="p" color="subdued">
        Or <Link to="/signup"> Sign Up</Link>
      </Text>
    </LoginLayout>
  );
};