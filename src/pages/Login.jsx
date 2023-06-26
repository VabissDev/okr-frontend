import { Button, TextField } from "@shopify/polaris"
import { LoginLayout } from "../components/LoginLayout"

export const Login = () => {
  return (
   <LoginLayout>
          <TextField
            type="email"
            placeholder="example@sitem.com"
            label="Username / Email:"
            bg="purple"
            onChange={(e) => {console.log(e.target.value);}}
            autoComplete="email"
          />
          <Button 
          submit
          fullWidth
          children="Log In"
          style={
            {}
          }
          />
   </LoginLayout>
  )
}
