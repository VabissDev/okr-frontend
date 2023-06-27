import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import '@shopify/polaris/build/esm/styles.css';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppProvider
        // i18n={{
        //   Polaris: {
        //     ResourceList: {
        //       sortingLabel: 'Sort by',
        //       defaultItemSingular: 'item',
        //       defaultItemPlural: 'items',
        //       showing: 'Showing {itemsCount} {resource}',
        //       Item: {
        //         viewItem: 'View details for {itemName}',
        //       },
        //     },
        //     Common: {
        //       checkbox: 'checkbox',
        //     },
        //   },
        // }}
        >
          <App />
        </AppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
