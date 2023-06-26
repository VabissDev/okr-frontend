import { Button, TextField } from "@shopify/polaris"
import { LoginLayout } from "@/components/LoginLayout"

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
                onChange={(e) => { console.log(e.target.value); }}
            />
            <Button
                submit
                fullWidth
                primary
                children="Log In"
            />
        </LoginLayout>
    )
}
