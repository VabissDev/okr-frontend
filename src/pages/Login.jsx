import React, { useState } from "react";
import { Button, TextField, Text, Divider, Icon } from "@shopify/polaris";
import { LoginLayout } from "@/components/LoginLayout";
import { Link } from "react-router-dom";
import {
    ViewMinor,
    HideMinor
} from '@shopify/polaris-icons';
import { useState } from "react";
import { PasswordInputWrapper } from "../styled/inputs";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const title = "Log in";

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const onSubmit = () => { console.log("submitted") }




    return (
        <LoginLayout
            title={title}
            onSubmit={onSubmit}
        >
            <TextField
                type="email"
                placeholder="example@site.com"
                label="Username / Email:"
                value={email}
                onChange={handleEmailChange}
                autoComplete="email"
            />
            <PasswordInputWrapper>
                <TextField
                    label="Password:"
                    type={showPassword ? "text" : "password"}
                    placeholder="*********"
                    value={password}
                    onChange={

                        handlePasswordChange
                    }
                />
                <Button
                    className="show-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <Icon
                        source={showPassword ? ViewMinor : HideMinor}
                        color="base"
                    />
                </Button>
            </PasswordInputWrapper>
            <Button
                submit
                fullWidth
                primary
                children="Log In"
            />
            <Divider />
            <Text
                alignment="center"
                variant="headingSm"
                as="p"
                color="subdued"
            >
                Or  <Link to="/signup"> Sign Up</Link>
            </Text>
        </LoginLayout>
    )
}

