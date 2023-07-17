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
import { getAccountData } from "@/redux/slices/accountSlice";
import { createWorkspace } from "@/redux/slices/workspaceSlices";
import { MembersModal } from "@/components/Modals";
import { CustomModal } from "@/components/Modals/CustomModal";
import { InventoryMajor } from "@shopify/polaris-icons";
import { FlexText } from "@/styled/buttons";
import { workspaceStatusOptions } from "@/utils/options";

export const WorkspaceCreate = () => {
  const dispatch = useDispatch();
  const [workspaceName, setWorkspaceName] = useState("");
  const [validName, setValidName] = useState(false)
  const [nameError, setNameError] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [status, setStatus] = useState("active");
  const user = useSelector(getAccountData);



  const handleNameChange = (value) => setWorkspaceName(value.trim());
  const handleDescriptionChange = (value) => setDescription(value.trim());
  const handleVisibilityChange = useCallback(
    (_, newValue) => setVisibility(newValue),
    []
  );
  const handleStatusChange = useCallback((value) => setStatus(value), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setValidName(workspaceName.length > 5)
    console.log(validName)
    setNameError(!validName ? "Workspace name must include at least 5 chareacters" : "")
    !workspaceName && setNameError("Workspace name is required")

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

   // validName &&  dispatch(createWorkspace(newWorkspace));

  };


  const buttonTitle = (
    <FlexText> New Workspace
      <Icon source={InventoryMajor} color='base' />
    </FlexText>
  )
  return (
    <CustomModal 
    buttonTitle={buttonTitle} 
    modalTitle="Create New Workspace"
    primary={{ content: "Create", action: handleSubmit }}
    secondary
    >
      <Form>
        <FormLayout>
          <TextField type="text" label="Owner:" value={user.name} disabled />
          <TextField
            type="text"
            placeholder="Enter workspace name"
            label="Workspace Name:"
            value={workspaceName}
            onChange={handleNameChange}
            error={nameError}
          />
          <TextField
            type="text"
            label="Description:"
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
            multiline={4}
            autoComplete="off"
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
