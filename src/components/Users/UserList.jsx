import { useState } from "react";
import { DataTable } from "@shopify/polaris";

export const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Agha", email: "agha@gmail.com", dateJoined: "2023-29-06" },
    { id: 1, name: "Rock", email: "rock@gmail.com", dateJoined: "2023-30-06" },
    { id: 1, name: "Cr", email: "cr@gmail.com", dateJoined: "2023-28-06" },
  ]);
  const [sort, setSort] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (e) => {
    if (e === sort) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSort(e);
      setSortDirection("asc");
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    const first = a[sort];
    const second = b[sort];

    if (first < second) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (first > second) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const rows = sortedUsers.map((user) => [
    user.name,
    user.email,
    user.dateJoined,
  ]);

  const colContentType = ["text", "text", "text"];
  const sortableColumns = [true, true, true];

  const handleSortClick = (columnIndex) => {
    const field = ["name", "email", "dateJoined"][columnIndex];
    handleSort(field);
  };

  return (
    <DataTable
      columnContentTypes={colContentType}
      headings={["Name", "Email", "Date Joined"]}
      rows={rows}
      sortable={[...sortableColumns]}
      defaultSortDirection={sortDirection}
      initialSortColumnIndex={0}
      onSort={handleSortClick}
    />
  );
};
