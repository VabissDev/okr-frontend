import { Card, FormLayout, Page } from "@shopify/polaris"

export const LoginLayout = ({ children }) => {
  return (
    <Page>
      <Card>
        <FormLayout children={children}>
        </FormLayout>
      </Card>
    </Page>
  )
}

