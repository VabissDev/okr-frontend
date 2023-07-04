import { useCallback, useState } from "react";
import {
  FormLayout,
  Button,
  TextField,
  Form,
  RadioButton,
  ButtonGroup,
  Select,
  Label,
  Text,
  Bleed,
  Box,
} from "@shopify/polaris";

import { MembersModal } from "@/components/Workspace/MembersModal";
import members from "@/data/members.json";

export const WorkspaceCreate = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [status, setStatus] = useState("active");
  const user = {
    fullName: "John Doe"
  }

  const [errorMessage, setErrorMessage] = useState("");

  const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Archived', value: 'archived' }
  ];

  const handleNameChange = (value) => setWorkspaceName(value);
  const handleVisibilityChange = useCallback(
    (_, newValue) => setVisibility(newValue),
    [],
  );
  const handleStatusChange = useCallback(
    (value) => setStatus(value),
    [],
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", visibility, status);
    // if (!workspaceName) {
    //   setErrorMessage("Workspace Name not defined.Please add");
    //   return;
    // }
    // const newWorkspace = {
    //   id: Date.now(),
    //   name: workspaceName,
    // };
    // setWorkspaces((prevWorkspaces) => [newWorkspace, ...prevWorkspaces]);
    // setWorkspaceName("");
    // setErrorMessage("");
  };

  return (
    <div>
      <Box paddingBlockEnd="8">
        <Text variant="headingXl" as="h2" children="Create Your Workspace" alignment="center" />
      </Box>
      <Form onSubmit={handleSubmit}>

        <FormLayout>
          <TextField
            type="text"
            placeholder="Enter workspace name"
            label="Workspace Name:"
            value={workspaceName}
            onChange={handleNameChange}
          // error={error && error.includes("email") ? error : ""}
          />
          <TextField
            type="text"
            label="Owner:"
            value={user.fullName}
            disabled
          />
          <Label>Visibility:</Label>
          <ButtonGroup>
            <RadioButton
              label="Public"
              helpText="Company-wide workspace."
              checked={visibility === 'public'}
              value="public"
              id="public"
              name="visibility"
              onChange={handleVisibilityChange}
            />
            <RadioButton
              label="Private"
              helpText="Team-specific workspace."
              id="private"
              name="visibility"
              checked={visibility === 'private'}
              value="private"
              onChange={handleVisibilityChange}
            />
          </ButtonGroup>
          <Select
            label="Status:"
            options={statusOptions}
            onChange={handleStatusChange}
            value={status}
          />
          <MembersModal members={members} title="Invite New Member" />
          <Button submit fullWidth primary children="Create New Workspace" />
        </FormLayout>
      </Form>
    </div>
  );
};