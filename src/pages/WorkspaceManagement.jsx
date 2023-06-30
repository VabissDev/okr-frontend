import { useState } from "react";
import {
  FormLayout,
  Button,
  TextField,
  Form,
  RadioButton,
  ButtonGroup,
} from "@shopify/polaris";

import { MembersModal } from "../components/Workspace/MembersModal";
import members from "../data/members.json";

export const WorkspaceManagement = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (value) => setWorkspaceName(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
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
        <ButtonGroup>
          <RadioButton
            label="Public"
            helpText="Company-wide workspace."
            // checked={value === 'public'}
            id="public"
            name="visibility"
            // onChange={handleChange}
          />
          <RadioButton
            label="Private"
            helpText="Team-specific workspace."
            id="private"
            name="visibility"
            // checked={value === 'private'}
            // onChange={handleChange}
          />
        </ButtonGroup>
        <MembersModal members={members} title="Invite User" />
        <Button submit fullWidth primary children="Save" />
      </FormLayout>
    </Form>
  );
};
