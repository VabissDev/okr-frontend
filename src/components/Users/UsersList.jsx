import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DataTable, Avatar } from "@shopify/polaris";
import { getAllUsers } from "@/redux/slices/userSlice";
import { getAccountData } from "@/redux/slices/accountSlice";
import PaginationComponent from '@/components/PaginationComponent';
import { EditUserForm } from './EditUserForm';
import { DeleteModal } from '../Modals/DeleteModal';
import { TableWrapper } from '@/styled/containers';
import { Link } from 'react-router-dom';
import { FlexContainer } from '@/styled/containers';


export const UserList = () => {
  const users = useSelector(getAllUsers);
  const account = useSelector(getAccountData);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const handlePageChange = useCallback((selectedPage) => {
    setCurrentPage(selectedPage);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  const rows = paginatedUsers.map((user) => {

    return [

      <div style={{ display: "flex", justifyContent:"space-between" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to={`/profile${user.id}`}>
            <Avatar
              customer
              size="medium"
              name={user.name}
              source={user.avatarSource}
            />
          </Link>

          {user.name}
        </div>
        {
          account.role === 'admin' &&
          <div style={{ display: "flex", gap: "10px" }}>
            <EditUserForm id={user.id} />
            <DeleteModal name={user.name}/>
          </div>
        }

      </div>
    ];
  });

  const totalItems = users.length;

  return (
    <TableWrapper>
      <DataTable
        columnContentTypes={['', 'text', 'text', 'text']}
        headings={['Users']}
        rows={rows}
        footerContent={totalItems > itemsPerPage && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', }}>
            <PaginationComponent
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
            />
          </div>
        )}
      />

    </TableWrapper>
  );
};