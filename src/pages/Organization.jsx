import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Icon, VerticalStack } from "@shopify/polaris";
import { getAllWorkspaces } from "@/redux/slices/workspaceSlices";
import { getAccountData } from "@/redux/slices/accountSlice";
import { WorkspaceCreate } from "./Workspace/WorkspaceCreate";
import { WorkspaceCard } from "./Workspace/WorkspaceCard";
import { Link } from "react-router-dom";
import { CustomersMinor } from "@shopify/polaris-icons";
import { FlexButton } from "@/styled/organization";

// illustartions
import illustration1 from "../assets/illustration/illustration1.jpg";
import illustration2 from "../assets/illustration/illustration2.png";
import illustration3 from "../assets/illustration/illustration3.jpg";
import illustration4 from "../assets/illustration/illustration4.png";
import illustration5 from "../assets/illustration/illustration5.png";
import { FlexContainer } from "../styled/organization";

export const Organization = () => {
  const workspaces = useSelector(getAllWorkspaces);
  const account = useSelector(getAccountData);
  const [active, setActive] = useState(false);
  console.log(account, "org page")

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
      <FlexContainer>
        {(account.role?.toLowerCase() === "admin" ||
          account.role?.toLowerCase() === "teamlead") && (
          <div style={{ flex: 1 }}>
            <Card padding="3">
              <Button
                onClick={toggleCreateWorkspace}
                textAlign="left"
                disclosure={active ? "up" : "down"}
                fullWidth
                primary
              >
                Create new workspace
              </Button>
              {active && <WorkspaceCreate />}
            </Card>
          </div>
        )}

        {account.role?.toLowerCase() === "admin" && (
          <div style={{ margin: "3px 10px" }}>
            <Link to="/users">
              <Button primary>
                <FlexButton>
                  See all users
                  <Icon source={CustomersMinor} color="base" />
                </FlexButton>
              </Button>
            </Link>
          </div>
        )}
      </FlexContainer>

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