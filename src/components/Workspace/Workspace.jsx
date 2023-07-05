import { Box, Card, Divider, HorizontalGrid, HorizontalStack, Icon, Text, VerticalStack } from '@shopify/polaris';
import { useParams } from 'react-router-dom';
import { getAllWorkspaces } from '../../redux/slices/workspaceSlices';
import { useSelector } from 'react-redux';
import { Space } from '../../styled/profilee';
import { MembersModal } from './MembersModal';
import { CustomersMinor } from '@shopify/polaris-icons';
import { GridLayout } from '../../styled/containers';


export const Workspace = () => {

  const { id } = useParams()
  const data = useSelector(getAllWorkspaces)
  const users = useSelector(state => state.users)
  const workspace = data.find(item => item.id === +id)

  const buttonTitle = <Icon
    source={CustomersMinor}
    color="base"
  />

  return (
    <Card>
      <GridLayout gap="20px">
      <Space>
        <Text variant="headingXl" as="h2" children={workspace.name} />
        <MembersModal members={[]} title={buttonTitle} />
      </Space>
      <Divider/>
      <HorizontalStack >
        <Text variant="headingMd"  fontWeight="semibold" as="h5" children="Visibility:" />
        <Text variant="headingMd" as="p" color='subdued' children={workspace.status} />
      </HorizontalStack>
      <HorizontalStack>
        <Text variant="headingMd"  fontWeight="semibold" as="h5" children="Status:" />
        <Text variant="headingMd" as="p" color='subdued' children={workspace.status} />
      </HorizontalStack>
      <Text variant="headingSm" as="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam veniam in adipisci ipsam mollitia temporibus recusandae repellat tempore, pariatur sunt ducimus assumenda? Officiis, earum voluptatibus vitae quos sapiente natus.</Text>
      </GridLayout>
    </Card>
  );
}



