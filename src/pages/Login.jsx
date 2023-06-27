import { Button, TextField, Text, Divider, Icon } from "@shopify/polaris"
import { LoginLayout } from "@/components/LoginLayout"
import { Link } from "react-router-dom";
import {
    ViewMajor
  } from '@shopify/polaris-icons';

export const Login = () => {

    const title = "Log in";
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
                onChange={(e) => { console.log(e.target.value); }}
                autoComplete="email"
            />
            <TextField
                label="Password:"
                type="password"
                placeholder="*********"
                onChange={(e) => { console.log(e.target.value); }}
            />
<Icon
  source={ViewMajor}
  color="base"
/>
            <Button
                submit
                fullWidth
                primary
                children="Log In"
            />
            <Divider/>
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
