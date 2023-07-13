import {
    Card,
    Divider,
    Icon,
    Text,
} from "@shopify/polaris";
import { Link, useParams } from "react-router-dom";
import { getAllWorkspaces } from "@/redux/slices/workspaceSlices";
import { useSelector } from "react-redux";
import { Space } from "@/styled/profilee";
import { CustomersMinor } from "@shopify/polaris-icons";
import { GridLayout } from "@/styled/containers";
import { MembersModal } from "@/components/Modals";
import { CustomModal } from "@/components/Modals/CusmonModel";

export const Workspace = () => {

    const { id } = useParams();
    const data = useSelector(getAllWorkspaces);
    const workspace = data.find((item) => item.id === +id);
    const users = useSelector((state) => state.users.users);
    const owner = users.find((user) => +user.id === workspace.owner);
    console.log(users, owner, workspace.owner);

    const buttonTitle = (
        <Text>
            <Icon source={CustomersMinor} color="base" /> {users.length}
        </Text>
    );


    const secondary = {
        content: 'Learn more',
        onAction: () => console.log("action"),
    }
    const primary = {
        content: 'Save',
        onAction: () => console.log("save"),
    }

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
                    <Link to={`/profile/${workspace.owner}`}>
                        <Text
                            variant="headingMd"
                            as="p"
                            children={owner?.name || "unknown"}
                        />
                    </Link>
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
            <CustomModal buttonTitle='click' modalTitle='modal' children="this is test modal" secondary={secondary} primary={primary} />

        </Card>
    );
};
