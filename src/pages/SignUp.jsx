import { useDispatch, useSelector } from "react-redux";
import { signup } from "@/redux/slices/userSlice";
import { useState } from "react";
import {
  TextField,
  Button,
  Text,
  Divider,
  Icon,
} from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { Link } from "react-router-dom";
import { PasswordInputWrapper } from "@/styled/inputs";
import { HideMinor, ViewMinor } from "@shopify/polaris-icons";

export const SignUp = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isOrganization, setIsOrganization] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });
  const title = "Create Account";

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleCompanyChange = (value) => {
    setCompany(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handlePasswordConfirmChange = (value) => {
    setPasswordConfirm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    } else if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    } else if (!password.trim()) {
      setError("Please enter a password.");
      return;
    } else if (password.trim().length < 8) {
      setError("Password should be at least 8 characters long.");
      return;
    } else if (password.trim() !== passwordConfirm.trim()) {
      setError("Passwords do not match.");
      return;
    }

    // Proceed with form submission
    setError("");
    const data = {
      name, 
      company,
      email,
      password
    }
    console.log(data)
    // dispatch(
    //   signup({
    //     id: Date.now(),
    //     organization: isOrganization,
    //     name,
    //     email,
    //     password,
    //   })
    // );
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <LoginLayout title={title} onSubmit={handleSubmit}>
      <TextField
        label="Full Name:"
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={handleNameChange}
        error={error && error.includes("name") ? error : ""}
      />
      <TextField
        label="Company Name:"
        type="text"
        placeholder="ABC Company"
        value={company}
        onChange={handleCompanyChange}
        error={error && error.includes("name") ? error : ""}
      />
      <TextField
        label="Email:"
        type="email"
        placeholder="example@site.com"
        value={email}
        onChange={handleEmailChange}
        error={error && error.includes("email") ? error : ""}
      />
      <PasswordInputWrapper>
        <TextField
          label="Password:"
          type={showPassword.password ? "text" : "password"}
          placeholder="*********"
          value={password}
          onChange={handlePasswordChange}
          error={error && error.toLowerCase().includes("password") ? error : ""}
        />
        <Button
          className="show-password-btn"
          onClick={() =>
            setShowPassword({
              ...showPassword,
              password: !showPassword.password,
            })
          }
        >
          <Icon source={showPassword.password ? ViewMinor : HideMinor} color="base" />
        </Button>
      </PasswordInputWrapper>
      <PasswordInputWrapper>
        <TextField
          label="Password Confirm:"
          type={showPassword.confirm ? "text" : "password"}
          placeholder="*********"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
          error={
            error && error.toLowerCase().includes("passwords") ? error : ""
          }
        />
        <Button
          className="show-password-btn"
          onClick={() =>
            setShowPassword({ ...showPassword, confirm: !showPassword.confirm })
          }
        >
          <Icon source={showPassword.confirm ? ViewMinor : HideMinor} color="base" />
        </Button>
      </PasswordInputWrapper>

      <Button primary submit fullWidth>
        Sign Up
      </Button>
      <Divider />
      <Text alignment="center" variant="headingSm" as="p" color="subdued">
        Already have an account, <Link to="/login"> Log In</Link>
      </Text>
    </LoginLayout>
  );
};
