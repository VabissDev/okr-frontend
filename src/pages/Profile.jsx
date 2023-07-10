import React from "react";
import { Page, Layout, Card, Text } from "@shopify/polaris";
import { VerticalStack } from "@shopify/polaris";

export const Profile = () => {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <VerticalStack>
              <Text>Name: John Doe</Text>
              <Text>Email: johndoe@example.com</Text>
              <Text>Company: ABC Company</Text>
              <Text>Position: Frontend Developer</Text>
            </VerticalStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card sectioned>
            <Text>Progress of My Objectives</Text>
            <ul>
              <li>Objective 1</li>
              <li>Objective 2</li>
              <li>Objective 3</li>
            </ul>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

