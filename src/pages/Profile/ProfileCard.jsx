import { Box, Card, Divider, PageActions, Tag, Text, VerticalStack } from "@shopify/polaris";
import { Space } from "@/styled/profilee";
import { EditUserForm } from "@/components/Users";
import { DeleteModal } from "@/components/Modals";
import { getAuth } from "@/redux/slices/AuthSlice";
import { useSelector } from "react-redux";
import { CustomBox } from "@/styled/containers";


export const ProfileCard = ({ profile }) => {

    const auth = useSelector(getAuth);
    const isAdmin = auth.roles.find(role => role.roleName === "ADMIN");
    const canEdit = auth.id === profile.id || isAdmin;

    const avatarSource =
        profile?.avatarSource ||
        "https://srv1.portal.p-cd.net/850p/2022/04/08/177405-1649405499-962966.jpg";

    return (
        <Card>
            <Space>
                <Box>
                    <Text variant="heading3xl" as="h1">
                        {profile?.name}
                    </Text>
                    <Space>
                        <Text variant="headingMd" as="p" fontWeight="semibold">
                            Organization:
                        </Text>
                        <Text>{profile?.org_name}</Text>
                    </Space>

                    <Space>
                        <Text variant="headingMd" as="p" fontWeight="semibold">
                            Email:
                        </Text>
                        <Text>{profile?.email}</Text>
                    </Space>
                </Box>
                <img
                    src={avatarSource}
                    alt="avatar"
                    style={{ width: 100, height: 100, borderRadius: "50%" }}
                />
            </Space>
            <Divider />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "10px",
                }}
            >
                <VerticalStack>
                    <Text variant="headingXl" as="h3">
                        Workspaces:
                    </Text>
                    <CustomBox block="15px 20px">
                        <div style={{ display: "flex", gap: "5px" }}>
                            {profile.teams.map((team, index) => {
                                return <Tag key={index}>{team}</Tag>;
                            })}
                        </div>
                    </CustomBox>
                </VerticalStack>
            </div>
            <PageActions
                primaryAction={isAdmin && <DeleteModal name={profile.name} />}
                secondaryActions={canEdit && <EditUserForm id={profile.id} />}
            />
        </Card>
    )
}
