import {
  Button,
  Modal,
  VerticalStack,
  Icon,
  LegacyCard,
  ResourceList,
  ResourceItem,
  Avatar,
  Text,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { CustomersMajor } from "@shopify/polaris-icons";

export const MembersModal = () => {
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);

  const members = [
    {
      id: "145",
      avatarSource:
        "https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746",
      name: "Yi So-Yeon",
      email: "abc@example.com",
    },
    {
      id: "146",
      avatarSource: "https://randomuser.me/api/portraits/med/men/1.jpg",
      name: "John Doe",
      email: "johndoe@example.com",
    },
    {
      id: "147",
      avatarSource: "https://randomuser.me/api/portraits/med/men/2.jpg",
      name: "Jane Smith",
      email: "janesmith@example.com",
    },
    {
      id: "148",
      avatarSource: "https://randomuser.me/api/portraits/med/men/3.jpg",
      name: "Robert Johnson",
      email: "robertjohnson@example.com",
    },
    {
      id: "149",
      avatarSource: "https://randomuser.me/api/portraits/med/men/4.jpg",
      name: "Emily Davis",
      email: "emilydavis@example.com",
    },
    {
      id: "150",
      avatarSource: "https://randomuser.me/api/portraits/med/men/5.jpg",
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
    },
    {
      id: "151",
      avatarSource: "https://randomuser.me/api/portraits/med/men/6.jpg",
      name: "Sarah Thompson",
      email: "sarahthompson@example.com",
    },
    {
      id: "152",
      avatarSource: "https://randomuser.me/api/portraits/med/men/7.jpg",
      name: "David Lee",
      email: "davidlee@example.com",
    },
    {
      id: "153",
      avatarSource: "https://randomuser.me/api/portraits/med/men/8.jpg",
      name: "Jennifer Chen",
      email: "jenniferchen@example.com",
    },
    {
      id: "154",
      avatarSource: "https://randomuser.me/api/portraits/med/men/9.jpg",
      name: "Christopher Martin",
      email: "christophermartin@example.com",
    },
    {
      id: "155",
      avatarSource: "https://randomuser.me/api/portraits/med/men/10.jpg",
      name: "Emma Anderson",
      email: "emmaanderson@example.com",
    },
    {
      id: "156",
      avatarSource: "https://randomuser.me/api/portraits/med/men/11.jpg",
      name: "Daniel Kim",
      email: "danielkim@example.com",
    },
    {
      id: "157",
      avatarSource: "https://randomuser.me/api/portraits/med/men/12.jpg",
      name: "Sophia Hernandez",
      email: "sophiahernandez@example.com",
    },
    {
      id: "158",
      avatarSource: "https://randomuser.me/api/portraits/med/men/13.jpg",
      name: "Matthew Garcia",
      email: "matthewgarcia@example.com",
    },
    {
      id: "159",
      avatarSource: "https://randomuser.me/api/portraits/med/men/14.jpg",
      name: "Olivia Martinez",
      email: "oliviamartinez@example.com",
    },
    {
      id: "160",
      avatarSource: "https://randomuser.me/api/portraits/med/men/15.jpg",
      name: "William Brown",
      email: "williambrown@example.com",
    },
    {
      id: "161",
      avatarSource: "https://randomuser.me/api/portraits/med/men/16.jpg",
      name: "Ava Davis",
      email: "avadavis@example.com",
    },
    {
      id: "162",
      avatarSource: "https://randomuser.me/api/portraits/med/men/17.jpg",
      name: "James Taylor",
      email: "jamest",
    },
  ];

  const activator = (
    <Button onClick={handleChange} size="slim">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "5px",
        }}
      >
        <Icon source={CustomersMajor} color="base" />
        20
      </div>
    </Button>
  );

  return (
    <div style={{ height: "500px" }}>
      <Modal
        activator={activator}
        open={active}
        title="frontend-team"
        onClose={handleChange}
      >
        <Modal.Section>
          <LegacyCard>
            <ResourceList
              resourceName={{ singular: "customer", plural: "customers" }}
              items={members}
              renderItem={(item) => {
                const { id, avatarSource, name, email } = item;

                return (
                  <ResourceItem
                    id={id}
                    media={
                      <Avatar
                        customer
                        size="medium"
                        name={name}
                        source={avatarSource}
                      />
                    }
                    accessibilityLabel={`View details for ${name}`}
                    name={name}
                  >
                    <Text variant="bodyMd" fontWeight="bold" as="h3">
                      {name}
                    </Text>
                    <div>{email}</div>
                  </ResourceItem>
                );
              }}
            />
          </LegacyCard>
        </Modal.Section>
      </Modal>
    </div>
  );
};
