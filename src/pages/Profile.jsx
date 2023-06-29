import { Btn, Display } from "../styled/profilee";
import { Space } from "../styled/profilee";
import {
  Card,
  Divider,
  Text,
  VerticalStack,
  HorizontalStack,
  Label,
  Box,
  Tag,
} from "@shopify/polaris";
import { Link } from "react-router-dom";


export const Profile = () => {
  const user = {
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    password: "**********",
    org_name: "VABISS",
    teams: ["team#1", "team#2", "team#3"]
  };
  const id = 1;
  return (
    <Card>
      <HorizontalStack>
        <Space>
          <Box>
            <Text variant="heading2xl" as="h2">
              {user.fullName}
            </Text>
            <Space>
              <Text fontWeight="semibold" variant="headingMd" as="p">Organization: </Text>
              <Text>{user.org_name}</Text>
            </Space>
            <Space>
              <Text fontWeight="semibold" variant="headingMd" as="p">Email: </Text>
              <Text>{user.email}</Text>
            </Space>
          </Box>
          <img
            src="https://srv1.portal.p-cd.net/850p/2022/04/08/177405-1649405499-962966.jpg"
            alt=""
            style={{ width: 100, height: 100, borderRadius: "50%" }}
          />
        </Space>
        <VerticalStack></VerticalStack>
      </HorizontalStack>
      <Divider />

      <Space>
        <Text variant="headingXl" as="h3">
          Personal Information
        </Text>
        <Link to={`/editprofile/${id}`}><Btn>Edit</Btn></Link>
      </Space>
      <Space>
        <Text fontWeight="semibold" variant="headingMd" as="p">Bio: </Text>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis doloremque beatae hic blanditiis ipsa dolor, iure quisquam nesciunt facilis commodi!</Text>
      </Space>
      <HorizontalStack gap="4" >
        <Text fontWeight="semibold" variant="headingMd" as="p">Teams: </Text>
        {
          user.teams.map((option) => (
            <Tag key={option}>
              {option}
            </Tag>
          ))
        }
      </HorizontalStack>

    </Card>
  );
};
