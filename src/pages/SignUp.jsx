import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/slices/userSlice";
import { useState } from "react";
import {
  Page,
  Card,
  Form,
  TextField,
  Button,
  FormLayout,
} from "@shopify/polaris";

export const SignUp = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <Page title="Sign up">
      <Card>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              label="Full Name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button primary submit>
              Sign Up
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  );
};
