import { useState, useCallback } from "react";
import {
    Button,
    Modal,
    Text
} from "@shopify/polaris";
import { FlexText } from "@/styled/buttons";

export const CustomModal = ({ buttonTitle, modalTitle, secondary, primary, children }) => {
    
    const [active, setActive] = useState(false);
    const handleChange = useCallback(() => setActive(!active), [active]);

    const title = <FlexText>{modalTitle}</FlexText>
    const text = <Text variant="bodyMd" as="h3">{buttonTitle}</Text>

    return (
        <>
            <Button onClick={handleChange} size="slim" children={text} />
            <Modal
                open={active}
                title={title}
                onClose={handleChange}
                primaryAction={ primary && {
                    content: primary.content,
                    onAction: primary.action,
                  }}
                  secondaryActions={ secondary && [
                    {
                      content: 'Learn more',
                      onAction: ()=> console.log("action"),
                    },
                  ]}
            >
                <Modal.Section>
                    {children}
                </Modal.Section>
            </Modal>
        </>
    );
};