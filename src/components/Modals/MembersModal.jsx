import  { useState, useCallback } from "react";
import {
  Button,
  Modal,
  Icon,
  ResourceList,
  ResourceItem,
  Avatar,
  Text,
  TextField,
  VerticalStack
} from "@shopify/polaris";
import { SearchMinor } from "@shopify/polaris-icons";
import { FlexText } from "@/styled/inputs";

export const MembersModal = ({ members, title }) => {
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");


  const handleChange = useCallback(() => setActive(!active), [active]);
  const handleSearchChange = useCallback((value) => setSearchValue(value), []);

  
    const modalTitle = <FlexText>{title}</FlexText>

    const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchValue.toLowerCase())
  );


  return(
    <>
      <Button onClick={handleChange} size="slim">
        <Text variant="bodyMd" fontWeight="bold" as="h3">
          {modalTitle}
        </Text>
      </Button>
 
    <Modal
     
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
        <VerticalStack>
          <ResourceList
            resourceName={{ singular: "customer", plural: "customers" }}
            items={filteredMembers}
            renderItem={(item) => {
              const { id, avatarSource, name, email } = item;

              return (
                <ResourceItem
                id={id}
                url={`/profile/${id}`}
                media={<Avatar customer size="medium" name={name} source={avatarSource} />}
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
        </VerticalStack>
      </Modal.Section>
    </Modal>
    </>
  );
};
