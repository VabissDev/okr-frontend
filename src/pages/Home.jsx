import React from "react";
import { Link } from "react-router-dom";
import { Page, Layout, Text, Button,Thumbnail } from "@shopify/polaris";
import { LoginPageHeader } from "../styled/containers";
export const Home = () => {
  return (
      <div>
      <Header/>
      <Content/>
      </div>
  );
};

export const Header = () => {
  return (
    <LoginPageHeader>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/">
        <Thumbnail source="https://www.trplane.com/wp-content/uploads/2021/08/okrs.jpg" alt="okr" />
        </Link>
        <div style={{display:"flex",gap:"10px"}}>
          <Button url="/login">Log In</Button>
          <Button url="/signup" primary>Sign Up</Button>
        </div>
      </div>
    </LoginPageHeader>
  );
};

export const Content = () => {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <div style={{ padding: "2rem" }}>
            <h2 style={{textAlign:"center"}}>OKR System</h2>
            <Text>
              <p>
                An OKR (Objectives and Key Results) system is a goal-setting framework that helps organizations define and
                track objectives and their measurable outcomes. It provides a structured approach to aligning individual and
                team goals with the overall strategic objectives of the organization.
              </p>
              <p>
                With our OKR system, you can easily set and manage objectives, define key results, track progress, and monitor
                the alignment of goals across your organization. Streamline your goal-setting process, foster transparency and
                collaboration, and drive success with our intuitive and powerful OKR system.
              </p>
            </Text>
            <Link to="/login">
            <Button primary>Get Started</Button>
            </Link>
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  );
};