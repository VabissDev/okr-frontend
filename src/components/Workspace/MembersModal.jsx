import { Button, Modal, VerticalStack, Icon } from "@shopify/polaris";
import { useState, useCallback } from "react";
import { CustomersMajor } from "@shopify/polaris-icons";

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
        {Array.from({ length: 20 }, (_, index) => (
          <Modal.Section key={index}>
            <VerticalStack>
              <p>
                Member <a href="#">#{index + 1}</a>
              </p>
            </VerticalStack>
          </Modal.Section>
        ))}
      </Modal>
    </div>
  );
};
