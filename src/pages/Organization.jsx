import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card } from "@shopify/polaris";
import { getAllWorkspaces } from "@/redux/slices/workspaceSlices";
import { getAccountData } from "@/redux/slices/accountSlice";
import { WorkspaceCreate } from "@/pages/Workspace/WorkspaceCreate";

export const Organization = () => {
  const workspaces = useSelector(getAllWorkspaces);
  const account = useSelector(getAccountData);
  const [active, setActive] = useState(false);

  const toggleCreateWorkspace = () => {
    setActive(!active);
  };

  return (
    <div>
      <Card padding="3">
        {(account.role === "admin" || account.role === "teamlead") && (
          <Button
            onClick={toggleCreateWorkspace}
            textAlign="left"
            disclosure={active ? "up" : "down"}
            fullWidth
            primary
          >
            Create new workspace
          </Button>
        )}
        {active && <WorkspaceCreate />}
      </Card>
    </div>
  );
};
