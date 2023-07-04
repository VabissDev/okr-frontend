import { Card, Form, FormLayout, Page, Text, Thumbnail, Frame } from "@shopify/polaris"
import { FormWrapper } from "@/styled/containers"
import { LoginPageHeader } from "@/styled/containers"

export const LoginLayout = ({ title, children, onSubmit }) => {
  return (
    <Frame>
      <LoginPageHeader>
        <Thumbnail source="https://www.trplane.com/wp-content/uploads/2021/08/okrs.jpg" alt="okr" />
      </LoginPageHeader>
      <Page>
        <FormWrapper>
          <Card>
            <Text variant="heading2xl" as="h1" alignment="center" children={title} />
            <Form onSubmit={onSubmit}>
              <FormLayout children={children} />
            </Form>
          </Card>
        </FormWrapper>
      </Page>
    </Frame>
  )
}

