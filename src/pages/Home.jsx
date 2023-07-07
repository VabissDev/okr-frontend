import { Link } from "react-router-dom";
import { Page, Layout, Text, Button, Thumbnail } from "@shopify/polaris";
import { Centralizer, GridLayout, HomeLayout, LoginPageHeader } from "@/styled/containers";


export const Home = () => {
  return (
    <HomeLayout>
      <Header />
      <Content />
    </HomeLayout>
  );
};

const Header = () => {
  return (
    <LoginPageHeader>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Thumbnail source="https://www.trplane.com/wp-content/uploads/2021/08/okrs.jpg" alt="okr" />
        <div style={{ display: "flex", gap: "10px" }}>
          <Button url="/login">Log In</Button>
          <Button url="/signup" primary>Sign Up</Button>
        </div>
      </div>
    </LoginPageHeader>
  );
};

const Content = () => {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Centralizer>
            <GridLayout gap="30px">
              <Text variant="heading2xl" as="h2">OKR System</Text>
              <Text variant="headingMd" as="p" fontWeight="medium">
                An OKR (Objectives and Key Results) system is a goal-setting framework that helps organizations define and
                track objectives and their measurable outcomes. It provides a structured approach to aligning individual and
                team goals with the overall strategic objectives of the organization.
              </Text>
              <Text variant="headingMd" as="p" fontWeight="medium">
                With our OKR system, you can easily set and manage objectives, define key results, track progress, and monitor
                the alignment of goals across your organization. Streamline your goal-setting process, foster transparency and
                collaboration, and drive success with our intuitive and powerful OKR system.
              </Text>
              <Link to="/signup">
                <Button primary>Get Started</Button>
              </Link>
            </GridLayout>
          </Centralizer>
        </Layout.Section>
      </Layout>
    </Page>
  );
};