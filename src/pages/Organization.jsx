import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, VerticalStack } from "@shopify/polaris";
import { getAllWorkspaces } from "@/redux/slices/workspaceSlices";
import { getAccountData } from "@/redux/slices/accountSlice";
import { WorkspaceCreate } from "@/pages/Workspace/WorkspaceCreate";
import { WorkspaceCard } from "./Workspace/WorkspaceCard";

export const Organization = () => {
  const workspaces = useSelector(getAllWorkspaces);
  const account = useSelector(getAccountData);
  const [active, setActive] = useState(false);

  const accountWorkspaces = workspaces.filter(
    (workspace) => workspace.org_name === account.org_name
  );

  const toggleCreateWorkspace = () => {
    setActive(!active);
  };

  return (
    <div>
      <div style={{ marginBottom: "var(--p-space-5)" }}>
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

      {/* Workspaces */}
      <VerticalStack>
        {accountWorkspaces.map((workspace) => (
          <WorkspaceCard key={workspace.id} {...workspace} />
        ))}
      </VerticalStack>
    </div>
  );
};
