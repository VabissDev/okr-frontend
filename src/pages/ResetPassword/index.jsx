import { PasswordInputWrapper } from "@/styled/inputs"
import { Banner, Button, Icon, Text, TextField } from "@shopify/polaris"
import { HideMinor, ViewMinor } from "@shopify/polaris-icons"
import { LoginLayout } from "@/components/LoginLayout";
import { useState } from "react";


export const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [matchErrorr, setMatchError] = useState(false);

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirm: false
    });

    const title = "Reset Your Password"

    const hanlePasswordChange = (value) => setPassword(value.trim());
    const hanleConfirmChange = (value) => setConfirm(value.trim());

    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordError(!password ? "Password is required " : "")
        setConfirmError(!confirm ? "Confirm Password" : "")

        if (password && confirm) {
            password !== confirm ? setMatchError(true) : setMatchError(false)
            console.log(matchErrorr)
        }
    }

    return (
        <LoginLayout title={title} onSubmit={handleSubmit}>
            {matchErrorr &&
                <Banner status="critical">
                    <Text color="critical" children="Passwords doesn't match" />
                </Banner>
            }
            <PasswordInputWrapper>
                <TextField
                    label="Password:"
                    type={showPassword.password ? "text" : "password"}
                    placeholder="*********"
                    value={password}
                    onChange={hanlePasswordChange}
                    error={passwordError}
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
                    value={confirm}
                    onChange={hanleConfirmChange}
                    error={confirmError}
                />
                <Button
                    className="show-password-btn"
                    onClick={() =>
                        setShowPassword({
                            ...showPassword,
                            confirm: !showPassword.confirm,
                        })
                    }
                >
                    <Icon
                        source={showPassword.password ? ViewMinor : HideMinor}
                        color="base"
                    />
                </Button>
            </PasswordInputWrapper>

            <Button submit fullWidth primary>
                Reset
            </Button>

        </LoginLayout>
    )
}
