import React, { useState, useCallback } from "react";
import {
  Button,
  Modal,
  Icon,
  LegacyCard,
  ResourceList,
  ResourceItem,
  Avatar,
  Text,
  TextField,
} from "@shopify/polaris";
import { CustomersMajor, SearchMinor } from "@shopify/polaris-icons";
import { FlexText } from "@/styled/inputs";

export const MembersModal = ({ members, title }) => {
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = useCallback(() => setActive(!active), [active]);
  const handleSearchChange = useCallback((value) => setSearchValue(value), []);

    
    const modalTitle = <FlexText>{title}</FlexText>

  const activator = (
    
      <Button onClick={handleChange} size="slim">
        {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "5px",
        }}
      > */}
        {/* <Icon source={CustomersMajor} color="base" />
        20 */}
        <Text variant="bodyMd" fontWeight="bold" as="h3">
          {modalTitle}
        </Text>
        {/* </div> */}
      </Button>
  );

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Modal
      activator={activator}
      open={active}
      title={modalTitle}
      onClose={handleChange}
    >
      <Modal.Section>
        <div style={{ marginBottom: "15px" }}>
          <TextField
            label=""
            placeholder="Search Members"
            value={searchValue}
            onChange={handleSearchChange}
            prefix={<Icon source={SearchMinor} color="base" />}
          />
        </div>
        <LegacyCard>
          <ResourceList
            resourceName={{ singular: "customer", plural: "customers" }}
            items={filteredMembers}
            renderItem={(item) => {
              const { id, avatarSource, name, email } = item;

              return (
                <ResourceItem
                  id={id}
                  url={`/profile/${id}`}
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
  );
};
