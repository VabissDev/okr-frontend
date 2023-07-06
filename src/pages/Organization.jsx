import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, CalloutCard, Card, VerticalStack } from "@shopify/polaris";
import { getAllWorkspaces } from "@/redux/slices/workspaceSlices";
import { getAccountData } from "@/redux/slices/accountSlice";
import { WorkspaceCreate } from "@/pages/Workspace/WorkspaceCreate";

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
      <div style={{ marginBottom: "20px" }}>
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
          <CalloutCard
            title={workspace.name}
            illustration="https://ouch-cdn2.icons8.com/_H48roWoztxdlfgJZQRrX_touEv1st371o7fctWmYmA/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTg2/L2MxOWUxMzFjLTNk/NjUtNDI0OS04NWUz/LTI0MzNlYWFhZjU2/YS5wbmc.png"
            primaryAction={{
              content: "Learn More",
              url: `/workspace/${workspace.id}`,
            }}
          >
            {workspace.description}
          </CalloutCard>
        ))}
      </VerticalStack>
    </div>
  );
};
