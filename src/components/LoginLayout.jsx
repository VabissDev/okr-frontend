import { Card, Form, FormLayout, Page, Text } from "@shopify/polaris"
import { FormWrapper } from "@/styled/containers"

export const LoginLayout = ({ title}) => {
  return (
    <Page>
        <FormWrapper>
          <Card>
            <Text variant="heading2xl" as="h1" children={title}/>
          </Card>
        </FormWrapper>
    </Page>
  )
}

