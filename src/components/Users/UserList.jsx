import { useSelector } from "react-redux";
import { DataTable, Avatar, Button } from "@shopify/polaris";
import { getAllUsers } from "../../redux/slices/userSlice";
import { getAccountData } from "../../redux/slices/accountSlice";
export const UserList = () => {
  const users = useSelector(getAllUsers);
  console.log(users);
  const account = useSelector(getAccountData);

  const rows = users.map((user) => {
    const editBtn = {
      url: `/editprofile/${user.id}`,
      primary: true,
      disabled: account.role !== "admin",
    };

    const deleteBtn = {
      destructive: true,
      disabled: account.role !== "admin",
    };

    return [
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <Avatar
            customer
            size="medium"
            name={user.name}
            source={user.avatarSource}
          />
          {user.name}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button {...editBtn}>Edit</Button>
          <Button {...deleteBtn}>Delete</Button>
        </div>
      </div>,
    ];
  });
  return (
    <DataTable
      columnContentTypes={["", "text", "text", "text"]}
      headings={["Users"]}
      rows={rows}
    />
  );
};