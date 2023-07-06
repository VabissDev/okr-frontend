import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, VerticalStack } from "@shopify/polaris";
import { getAllWorkspaces } from "@/redux/slices/workspaceSlices";
import { getAccountData } from "@/redux/slices/accountSlice";
import { WorkspaceCreate } from "@/pages/Workspace/WorkspaceCreate";
import { WorkspaceCard } from "./Workspace/WorkspaceCard";
import illustration1 from "../assets/illustration/illustration1.jpg";
import illustration2 from "../assets/illustration/illustration2.png";
import illustration3 from "../assets/illustration/illustration3.jpg";
import illustration4 from "../assets/illustration/illustration4.png";
import illustration5 from "../assets/illustration/illustration5.png";

export const Organization = () => {
  const workspaces = useSelector(getAllWorkspaces);
  const account = useSelector(getAccountData);
  const [active, setActive] = useState(false);

  const illustrations = [
    illustration1,
    illustration2,
    illustration3,
    illustration4,
    illustration5,
  ];

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
        {accountWorkspaces.map((workspace) => {
          const randomIllustration =
            illustrations[
              Math.floor(Math.floor(Math.random() * illustrations.length))
            ];
          return (
            <WorkspaceCard
              key={workspace.id}
              {...workspace}
              illustration={randomIllustration}
            />
          );
        })}
      </VerticalStack>
    </div>
  );
};
