import {
  Button,
  Modal,
  Icon,
  LegacyCard,
  ResourceList,
  ResourceItem,
  Avatar,
  Text,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { CustomersMajor } from "@shopify/polaris-icons";
import members from "../../data/members.json";

export const MembersModal = () => {
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);

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
