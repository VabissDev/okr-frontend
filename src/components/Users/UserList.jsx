import React, { useState, useCallback } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { DataTable, Avatar, Button, Pagination } from "@shopify/polaris";
import { getAllUsers } from "../../redux/slices/userSlice";
import { getAccountData } from "../../redux/slices/accountSlice";
import { removeUser } from "../../redux/slices/userSlice";

import PaginationComponent from '../PaginationComponent'; // Import the PaginationComponent

export const UserList = () => {
  const users = useSelector(getAllUsers);
  console.log(users);
  const account = useSelector(getAccountData);
  const dispatch = useDispatch();


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const handleDeleteUser = (userId) => {
    dispatch(removeUser(userId));
  };

  const handlePageChange = useCallback((selectedPage) => {
    setCurrentPage(selectedPage);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  const rows = paginatedUsers.map((user) => {
    const editBtn = {
      url: `/editprofile/${user.id}`,
      primary: true,
      disabled: account.role !== "admin",
    };

    const deleteBtn = {
      destructive: true,
      disabled: account.role !== "admin",
      onClick: () => handleDeleteUser(user.id),
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

  const totalItems = users.length;

  return (
    <>
      <DataTable
        columnContentTypes={['', 'text', 'text', 'text']}
        headings={['Users']}
        rows={rows}
      />
      {totalItems > itemsPerPage && (
         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', marginLeft: "200px" }}>
        <PaginationComponent 
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
        />
        </div>
      )}
    </>
  );
};