import React, { useState } from "react";
import {
  Page,
  Card,
  Layout,
  FormLayout,
  Button,
  TextField,
  Banner,
} from "@shopify/polaris";
import { MembersModal } from "../components/Workspace/MembersModal";

export const WorkspaceManagement = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaces, setWorkspaces] = useState([
    { id: 1, name: "Example 1" },
    { id: 2, name: "Example 2" },
  ]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (value) => {
    setWorkspaceName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workspaceName) {
      setErrorMessage("Workspace Name not defined.Please add");
      return;
    }
    const newWorkspace = {
      id: Date.now(),
      name: workspaceName,
    };
    setWorkspaces((prevWorkspaces) => [newWorkspace, ...prevWorkspaces]);
    setWorkspaceName("");
    setErrorMessage("");
  };

  return (
    <Page title="Workspace Management">
      <Layout>
        <Layout>
          <Card title="Create Workspace">
            <Card>
              {errorMessage && (
                <Banner status="critical">
                  <p>{errorMessage}</p>
                </Banner>
              )}
              <form onSubmit={handleSubmit}>
                <FormLayout>
                  <FormLayout>
                    <TextField
                      label="Workspace Name"
                      value={workspaceName}
                      onChange={handleNameChange}
                    />
                  </FormLayout>
                  <Button primary submit>
                    Create Workspace
                  </Button>
                </FormLayout>
              </form>
            </Card>
          </Card>
        </Layout>
        <Layout>
          <Card title="Existing Workspaces">
            <Card>
              {workspaces.map((workspace) => (
                <div key={workspace.id}>{workspace.name}</div>
              ))}
            </Card>
          </Card>
        </Layout>

        {/* Workspace members */}
        <MembersModal />
      </Layout>
    </Page>
  );
};
