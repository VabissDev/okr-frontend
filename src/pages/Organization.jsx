import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Divider,
  HorizontalStack,
  Icon,
  VerticalStack,
} from "@shopify/polaris";
// import { getAllWorkspaces } from "@/redux/slices/workspaceSlices"; error verdiyi ucun helelik evezine fake data'dan ist etdim
import workspaces from "@/data/workspaces.json";
import { getAccountData } from "@/redux/slices/accountSlice";
import { Link } from "react-router-dom";
import { CustomersMajor } from "@shopify/polaris-icons";
import PaginationComponent from "@/components/PaginationComponent";

// illustartions
import illustration1 from "@/assets/illustration/illustration1.jpg";
import illustration2 from "@/assets/illustration/illustration2.png";
import illustration3 from "@/assets/illustration/illustration3.jpg";
import illustration4 from "@/assets/illustration/illustration4.png";
import illustration5 from "@/assets/illustration/illustration5.png";
import { WorkspaceCard, WorkspaceCreate } from "@/pages/Workspace";
import { AddUserForm } from "@/components/Users/AddUserForm";
import { CustomBox } from "@/styled/containers";
import { FlexText } from "@/styled/buttons";

export const Organization = () => {
  // const workspaces = useSelector(getAllWorkspaces);
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

  console.log();
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
        <VerticalStack gap="4">
          {(account.role?.toLowerCase() === "admin" ||
            account.role?.toLowerCase() === "teamlead") && <Divider />}
          <HorizontalStack gap="4">
            {account.role?.toLowerCase() === "admin" && (
              <>
                <Link to="/users">
                  <Button>
                    <FlexText>
                      All Users
                      <Icon source={CustomersMajor} color="base" />
                    </FlexText>
                  </Button>
                </Link>
                <AddUserForm />
              </>
            )}

            {(account.role?.toLowerCase() === "admin" ||
              account.role?.toLowerCase() === "teamlead") && (
              <WorkspaceCreate />
            )}
          </HorizontalStack>
          {(account.role?.toLowerCase() === "admin" ||
            account.role?.toLowerCase() === "teamlead") && (
            <CustomBox bottom="20px">
              <Divider />
            </CustomBox>
          )}
        </VerticalStack>
      }

      {/* Workspaces */}
      <VerticalStack>
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
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
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
