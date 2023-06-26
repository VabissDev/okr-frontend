import { Card, Form, FormLayout, Page, Text } from "@shopify/polaris"
import { FormWrapper } from "@/styled/containers"

export const LoginLayout = ({ title, children, onSubmit }) => {
  return (
    <Page>
      <FormWrapper>
        <Card>
          <Text variant="heading2xl" as="h1" children={title} />
          <Form onSubmit={onSubmit}>
            <FormLayout children={children} />
          </Form>
        </Card>
      </FormWrapper>
    </Page>
  )
}

