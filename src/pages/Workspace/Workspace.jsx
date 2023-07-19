import { Card, Divider, Icon, Text } from "@shopify/polaris";
import { Link, useParams } from "react-router-dom";
// import { getAllWorkspaces } from "@/redux/slices/workspaceSlices"; error verdiyi ucun helelik evezine fake data'dan ist etdim
import workspaces from "@/data/workspaces.json";
import { useSelector } from "react-redux";
import { Space } from "@/styled/profilee";
import { CustomersMinor } from "@shopify/polaris-icons";
import { GridLayout } from "@/styled/containers";
import { MembersModal } from "@/components/Modals";
import { NoneUnderline } from "@/styled/buttons";

export const Workspace = () => {
  const { id } = useParams();
  //   const data = useSelector(getAllWorkspaces);   error verdiyi ucun helelik evezine fake data'dan ist etdim
  const data = workspaces;
  const workspace = data.find((item) => item.id === +id);
  const users = useSelector((state) => state.users.users);
  const owner = users.find((user) => +user.id === workspace.owner);
  console.log(users, owner, workspace.owner);

  const buttonTitle = (
    <Text>
      <Icon source={CustomersMinor} color="base" /> {users.length}
    </Text>
  );

  return (
    <Card>
      <GridLayout gap="20px">
        <Space>
          <Text variant="headingXl" as="h2" children={workspace.name} />
          <MembersModal members={users} title={buttonTitle} />
        </Space>
        <Divider />
        <GridLayout columns="1fr 5fr">
          <Text
            variant="headingMd"
            fontWeight="semibold"
            as="h5"
            children="Visibility:"
          />
          <Text
            variant="headingMd"
            as="p"
            color="subdued"
            children={workspace.visibility}
          />
        </GridLayout>
        <GridLayout columns="1fr 5fr">
          <Text
            variant="headingMd"
            fontWeight="semibold"
            as="h5"
            children="Status:"
          />
          <Text
            variant="headingMd"
            as="p"
            color="subdued"
            children={workspace.status}
          />
        </GridLayout>
        <GridLayout columns="1fr 5fr">
          <Text
            variant="headingMd"
            fontWeight="semibold"
            as="h5"
            children="Admin:"
          />
          <NoneUnderline>
            <Link to={`/profile/${workspace.owner}`}>
              <Text
                variant="headingMd"
                as="p"
                children={owner?.name || "unknown"}
              />
            </Link>
          </NoneUnderline>
        </GridLayout>
        <Space>
          <Text
            variant="headingMd"
            fontWeight="semibold"
            as="h5"
            children="Target:"
          />
          <Text variant="headingSm" color="subdued" as="p">
            {workspace.description}
          </Text>
        </Space>
      </GridLayout>
    </Card>
  );
};
