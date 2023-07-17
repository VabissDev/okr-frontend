import React from "react";
import { CustomModal } from "./CustomModal";
import { Icon } from "@shopify/polaris";
import { DeleteMinor } from "@shopify/polaris-icons";

export const DeleteModal = ({ name, primaryAction }) => {
  return (
    <CustomModal
      buttonTitle={<Icon source={DeleteMinor} />}
      modalTitle={`Delete ${name || "User"}`}
      children={`Are you sure you want to delete ${name || "this user"}`}
      primary={{ content:"Delete", action: primaryAction, destructive: true}}
      secondary
    />
  );
};
