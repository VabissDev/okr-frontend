import {
  TextField,
  Button,
  Text,
  Divider,
  Icon,
  Spinner,
} from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { PasswordInputWrapper } from "@/styled/inputs";
import { HideMinor, ViewMinor } from "@shopify/polaris-icons";
import { useEffect, useState } from "react";

// signup
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signupUser,
  userSelector,
  clearState,
} from "../redux/slices/AuthSlice";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export const SignUp = () => {
  // signup
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  // form validation start
  const title = "Create Organization";
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleOrganizationChange = (value) => {
    setOrganization(value);
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
  // form validation end

  const handleSubmit = async (e) => {
    e.preventDefault();

    // error messages
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    } else if (!organization.trim()) {
      setError("Please enter your organization name.");
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
      fullName: name,
      organizationName: organization,
      email,
      password,
    };
    console.log(data);

    dispatch(signupUser(data));

    // try {
    //   const response = await axios.post(REGISTER_URL, data);
    //   console.log(response.data);
    //   setToken(response.data.token);
    //   console.log(token);
    // } catch (error) {
    //   console.log(error);
    // }

    // setName("");
    // setEmail("");
    // setPassword("");
    // setPasswordConfirm("");
  };

  // signup
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      navigate("/organization");
    }

    if (isError) {
      toast.error(errorMessage);
      console.log(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <LoginLayout title={title} onSubmit={handleSubmit}>
      <Toaster />
      <TextField
        label="Full Name:"
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={handleNameChange}
        error={error && error.includes("your name") ? error : ""}
      />
      <TextField
        label="Organization Name:"
        type="text"
        placeholder="ABC Organization"
        value={organization}
        onChange={handleOrganizationChange}
        error={error && error.includes("organization") ? error : ""}
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
          <Icon
            source={showPassword.password ? ViewMinor : HideMinor}
            color="base"
          />
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
          <Icon
            source={showPassword.confirm ? ViewMinor : HideMinor}
            color="base"
          />
        </Button>
      </PasswordInputWrapper>

      <Button primary submit fullWidth>
        {isFetching ? (
          <Spinner accessibilityLabel="Spinner example" size="small" />
        ) : (
          "Sign Up"
        )}
      </Button>
      <Divider />
      <Text alignment="center" variant="headingSm" as="p" color="subdued">
        Already have an account, <Link to="/login"> Log In</Link>
      </Text>
    </LoginLayout>
  );
};
