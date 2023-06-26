import { Button, Form, FormLayout, TextField } from "@shopify/polaris"
import { LoginLayout } from "@/components/LoginLayout"

export const Login = () => {

    return (
        <LoginLayout title="Log In">
            <Form>
                <FormLayout>
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
                </FormLayout>
            </Form>
        </LoginLayout>
    )
}
