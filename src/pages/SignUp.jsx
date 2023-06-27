import { useDispatch, useSelector } from "react-redux";
import { signup } from "@/redux/slices/userSlice";
import { useState } from "react";
import { TextField, Button, Text, Divider } from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const title = "Sign Up"

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signup({
        id: Date.now(),
        name,
        email,
        password,
      })
    );
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <LoginLayout
      title={title}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Full Name"
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        label="Email"
        type="email"
        placeholder="example@site.com"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label="Password"
        type="password"
        placeholder="*********"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button primary submit fullWidth>
        Sign Up
      </Button>
      <Divider/>
      <Text
        alignment="center"
        variant="headingSm"
        as="p"
        color="subdued"
      >
        If you already have an account  <Link to="/login"> Log In</Link>
      </Text>
    </LoginLayout>
  );
};
