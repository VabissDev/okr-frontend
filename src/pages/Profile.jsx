import {
  Button,
  Card,
  Divider,
  Text,
  VerticalStack,
  Box,
  Icon,
  Tag,
  PageActions,
} from "@shopify/polaris";
import { Top, Space} from "@/styled/profilee";
import { DeleteMinor, EditMinor } from "@shopify/polaris-icons";
import { Link, useParams } from "react-router-dom";
import { getAccountData } from "@/redux/slices/accountSlice";
import { useSelector } from "react-redux";
import { EmptyData } from "@/components/EmptyData";
import EditProfile from "./EditProfile";



export const Profile = () => {

  const { id } = useParams();
  const account = useSelector(getAccountData);
  const users = useSelector((state) => state.users.users);
  const profile = users.find((user) => user.id === id);
  const canEdit = account.id === profile?.id;
  const isAdmin = account.role === 'admin'
  const avatarSource =
    profile?.avatarSource ||
    "https://srv1.portal.p-cd.net/850p/2022/04/08/177405-1649405499-962966.jpg";
  return (
    <>
      {profile ? (
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
              alt=""
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
            <div>
              <Text variant="heading2xl" as="h3">
                Personal Information
              </Text>
            </div>
            <div></div>
          </div>

          {
            (canEdit || isAdmin) &&
            <>
              <VerticalStack spacing="extraTight">
                <Top>
                  <Space>
                    <Text style={{ fontWeight: "bold" }}>Team name:</Text>
                    <div style={{ display: "flex", gap: "5px" }}>
                      {profile.teams.map((team, index) => {
                        return <Tag key={index}>{team}</Tag>;
                      })}
                    </div>
                  </Space>
                </Top>
              </VerticalStack>
              <PageActions

            
                primaryAction={

                  <EditProfile></EditProfile>
                  // <Link to={`/editprofile/${id}`}>
                  //   <Button primary>
                  //     <Icon source={EditMinor} color="base" />
                  //   </Button>
                  // </Link>
                }
                secondaryActions={
                  isAdmin && 
                  [
                   

                    {
                      content: "Delete",
                      destructive: true,
                    },
                  ]
                }
              />
            </>
          }
        </Card>
      ) : (
        <EmptyData
          heading="Sorry, user cannot be found."
          actionTitle="Back To Workspaces"
          actionPath="/organization"
        />
      )}
    </>
  );
};


