import { Card, Form, FormLayout, Page, Text } from "@shopify/polaris"
import { FormWrapper } from "@/styled/containers"

export const LoginLayout = ({ title, children }) => {
  return (
    <Page>
      <Form onSubmit={() => console.log("submitted")}>
        <FormWrapper>
          <Card>
            <Text variant="heading2xl" as="h1" children={title}/>
            <FormLayout children={children} />
          </Card>
        </FormWrapper>
      </Form>
    </Page>
  )
}

