import { Box, Card, Divider, HorizontalGrid, HorizontalStack, Icon, Text, VerticalStack } from '@shopify/polaris';
import { useParams } from 'react-router-dom';
import { getAllWorkspaces } from '@/redux/slices/workspaceSlices';
import { useSelector } from 'react-redux';
import { Space } from '@/styled/profilee';
import { CustomersMinor } from '@shopify/polaris-icons';
import { GridLayout } from '@/styled/containers';
import { Navigations } from '@/components/Navigation';
import { MembersModal } from '@/components/MembersModal';


export const Workspace = () => {

  const { id } = useParams()
  const data = useSelector(getAllWorkspaces)
  const workspace = data.find(item => item.id === +id)
  const users = useSelector(state => state.users.users)
  const owner = users.find(user => +user.id === workspace.owner);
  console.log(users, owner, workspace.owner)

  const buttonTitle = <Text><Icon
    source={CustomersMinor}
    color="base"
  /> {users.length}
  </Text>

  return (

      <Card>
        <GridLayout gap="20px">
          <Space>
            <Text variant="headingXl" as="h2" children={workspace.name} />
            <MembersModal members={users} title={buttonTitle} />
          </Space>
          <Divider />
          <GridLayout columns="1fr 5fr">
            <Text variant="headingMd" fontWeight="semibold" as="h5" children="Visibility:" />
            <Text variant="headingMd" as="p" color='subdued' children={workspace.visibility} />
          </GridLayout>
          <GridLayout columns="1fr 5fr">
            <Text variant="headingMd" fontWeight="semibold" as="h5" children="Status:" />
            <Text variant="headingMd" as="p" color='subdued' children={workspace.status} />
          </GridLayout>
          <GridLayout columns="1fr 5fr">
            <Text variant="headingMd" fontWeight="semibold" as="h5" children="Admin:" />
            <Text variant="headingMd" as="p" color='subdued' children={owner?.name || "unknown"} />
          </GridLayout>
          <Space>
            <Text variant="headingMd" fontWeight="semibold" as="h5" children="Target:" />
            <Text variant="headingSm" color='subdued' as="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam veniam in adipisci ipsam mollitia temporibus recusandae repellat tempore, pariatur sunt ducimus assumenda? Officiis, earum voluptatibus vitae quos sapiente natus.</Text>
          </Space>
        </GridLayout>
      </Card>
  );
}



