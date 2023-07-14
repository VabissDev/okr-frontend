import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Divider, Icon, VerticalStack } from "@shopify/polaris";
import { getAllWorkspaces } from "@/redux/slices/workspaceSlices";
import { getAccountData } from "@/redux/slices/accountSlice";
import { Link } from "react-router-dom";
import { CustomersMinor } from "@shopify/polaris-icons";
import { FlexButton } from "@/styled/organization";
import PaginationComponent from "../../src/components/PaginationComponent";


// illustartions
import illustration1 from "@/assets/illustration/illustration1.jpg";
import illustration2 from "@/assets/illustration/illustration2.png";
import illustration3 from "@/assets/illustration/illustration3.jpg";
import illustration4 from "@/assets/illustration/illustration4.png";
import illustration5 from "@/assets/illustration/illustration5.png";
import { WorkspaceCard, WorkspaceCreate } from "@/pages/Workspace";
import { AddUserForm } from "@/components/Users/AddUserForm";
import { FlexContainer } from "@/styled/containers";
import { FlexText } from "../styled/inputs";

export const Organization = () => {
  const workspaces = useSelector(getAllWorkspaces);
  const account = useSelector(getAccountData);
  const [active, setActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

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

   const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedWorkspaces = accountWorkspaces.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <>
      {

        <>
          {account.role?.toLowerCase() === "admin" && (
            <>
              <Link to="/users">
                <Button>
                  <FlexButton>
                    See all users
                    <Icon source={CustomersMinor} color="base" />
                  </FlexButton>
                </Button>
              </Link>
              <AddUserForm />
            </>
          )}

          {(account.role?.toLowerCase() === "admin" ||
            account.role?.toLowerCase() === "teamlead") && (
              <WorkspaceCreate />
            )}
          {(account.role?.toLowerCase() === "admin" ||
            account.role?.toLowerCase() === "teamlead") && (
              <Divider />
            )}
        </>
      }


      {/* Workspaces */}
      <VerticalStack >
        {displayedWorkspaces.map((workspace) => {
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
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
       <PaginationComponent 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalItems={accountWorkspaces.length}
        itemsPerPage={itemsPerPage}
      />
           </div>

    </>
  );
};
