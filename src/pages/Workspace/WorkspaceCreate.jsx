import { useCallback, useState } from "react";
import {
  FormLayout,
  TextField,
  Form,
  RadioButton,
  ButtonGroup,
  Select,
  Label,
  Icon,
} from "@shopify/polaris";

import members from "@/data/members.json";
import { useDispatch, useSelector } from "react-redux";
import { MembersModal } from "@/components/Modals";
import { CustomModal } from "@/components/Modals/CustomModal";
import { InventoryMajor } from "@shopify/polaris-icons";
import { FlexText } from "@/styled/buttons";
import { workspaceStatusOptions } from "@/utils/options";

import { getAuth } from "@/redux/slices/AuthSlice";

export const WorkspaceCreate = () => {
  const dispatch = useDispatch();
  const [workspaceName, setWorkspaceName] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [status, setStatus] = useState("active");
  const user = useSelector(getAuth);

  const handleNameChange = (value) => setWorkspaceName(value.trim());
  const handleDescriptionChange = (value) => setDescription(value.trim());
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
      workspaceName.trim().length < 5 ||
      workspaceName.trim().length > 20
    ) {
      setErrorMessage("Workspace name must be between 5 to 20 characters.");
      return;
    } else if (!description.trim()) {
      setErrorMessage("Description not defined. Please add description.");
      return;
    } else if (
      description.trim().length < 10 ||
      description.trim().length > 100
    ) {
      setErrorMessage("Description must be between 10 to 100 characters.");
      return;
    }

    // const newWorkspace = {
    //   id: Date.now(),
    //   name: workspaceName,
    //   description,
    //   owner: user.id,
    //   visibility,
    //   status,
    //   members: [45, 12, 13], // members id - progress...
    //   org_name: "ABC",
    // };

    // reset form
    setErrorMessage("");
    setDescription("");
    setWorkspaceName("");
    setVisibility("public");
    setStatus("active");
  };

  const buttonTitle = (
    <FlexText>
      {" "}
      New Workspace
      <Icon source={InventoryMajor} color="base" />
    </FlexText>
  );
  return (
    <CustomModal
      buttonTitle={buttonTitle}
      modalTitle="Create New Workspace"
      primary={{ content: "Create", action: handleSubmit }}
      secondary
    >
      <Form>
        <FormLayout>
          <TextField
            type="text"
            label="Owner:"
            value={user.fullName}
            disabled
          />
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
            options={workspaceStatusOptions}
            onChange={handleStatusChange}
            value={status}
          />
          <MembersModal members={members} title="Invite New Member" />
        </FormLayout>
      </Form>
    </CustomModal>
  );
};
