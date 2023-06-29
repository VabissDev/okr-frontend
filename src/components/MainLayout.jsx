import { Page } from "@shopify/polaris";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import React from "react";
import { Navigations } from "./Navigation";

export const MainLayout = () => {
  return (
    <Page>
      <Header />
      <div style={{ display: "flex" }}>
        <Navigations />
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>
      <Outlet />
    </Page>
  );
};
