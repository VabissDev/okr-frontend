import { useState, useCallback } from "react";
import { Button, Modal, Text } from "@shopify/polaris";
import { FlexText } from "@/styled/buttons";

export const CustomModal = ({
  buttonTitle,
  modalTitle,
  secondary,
  primary,
  children,
}) => {
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);

  const title = <FlexText>{modalTitle}</FlexText>;
  const text = (
    <Text variant="bodyMd" as="h3">
      {buttonTitle}
    </Text>
  );

  return (
    <>
      <Button onClick={handleChange} children={text} />
      <Modal
        open={active}
        title={title}
        onClose={handleChange}
        primaryAction={
          primary && {
            content: primary.content || "Delete",
            onAction: primary.action,
            destructive: true,
          }
        }
        secondaryActions={
          secondary && [
            {
              content: secondary.content || "Cancel",
              onAction: handleChange,
            },
          ]
        }
      >
        <Modal.Section>{children}</Modal.Section>
      </Modal>
    </>
  );
};
