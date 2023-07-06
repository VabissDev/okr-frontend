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

import { MembersModal } from "@/components/MembersModal";
import members from "@/data/members.json";
import { useDispatch, useSelector } from "react-redux";
import { getAccountData } from "@/redux/slices/accountSlice";

export const WorkspaceCreate = () => {
  const dispatch = useDispatch();
  const [workspaceName, setWorkspaceName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [status, setStatus] = useState("active");
  const user = useSelector(getAccountData);

  const [errorMessage, setErrorMessage] = useState("");

  const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Archived", value: "archived" },
  ];

  const handleNameChange = (value) => setWorkspaceName(value);
  const handleDescriptionChange = (value) => setDescription(value);
  const handleVisibilityChange = useCallback(
    (_, newValue) => setVisibility(newValue),
    []
  );
  const handleStatusChange = useCallback((value) => setStatus(value), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workspaceName.trim()) {
      setErrorMessage("Workspace name not defined. Please add workspace name.");
      return;
    } else if (
      workspaceName.trim().length < 3 ||
      workspaceName.trim().length > 20
    ) {
      setErrorMessage("Workspace name must be between 3 to 20 characters.");
      return;
    }
    if (!description.trim()) {
      setErrorMessage("Description not defined. Please add description.");
      return;
    } else if (
      description.trim().length < 10 ||
      description.trim().length > 100
    ) {
      setErrorMessage("Description must be between 10 to 100 characters.");
      return;
    }
    setErrorMessage("");

    const newWorkspace = {
      id: Date.now(),
      name: workspaceName,
      description,
      owner: user.id,
      visibility,
      status,
      members: [45, 12, 13], // members id - progress...
      org_name: "ABC",
    };

    dispatch(createWorkspace(newWorkspace));

    console.log(newWorkspace);
    setDescription("");
    setWorkspaceName("");
  };

  return (
    <div>
      <Box padding="8">
        <Text
          variant="headingXl"
          as="h2"
          children="Create Your Workspace"
          alignment="center"
        />
      </Box>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField type="text" label="Owner:" value={user.name} disabled />
          <TextField
            type="text"
            placeholder="Enter workspace name"
            label="Workspace Name:"
            value={workspaceName}
            onChange={handleNameChange}
            error={
              errorMessage && errorMessage.toLowerCase().includes("workspace")
                ? errorMessage
                : ""
            }
          />
          <TextField
            type="text"
            label="Description:"
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
            multiline={4}
            autoComplete="off"
            error={
              errorMessage && errorMessage.toLowerCase().includes("description")
                ? errorMessage
                : ""
            }
          />
          <Label>Visibility:</Label>
          <ButtonGroup>
            <RadioButton
              label="Public"
              helpText="Company-wide workspace."
              checked={visibility === "public"}
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
              checked={visibility === "private"}
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
