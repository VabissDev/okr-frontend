import React, { useCallback } from 'react';
import { Pagination } from '@shopify/polaris';

const PaginationComponent = ({ currentPage, onPageChange, totalItems, itemsPerPage }) => {
  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const handleNext = useCallback(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, onPageChange, totalItems, itemsPerPage]);

  return (
    <Pagination
      hasPrevious={currentPage > 1}
      onPrevious={handlePrevious}
      hasNext={currentPage < Math.ceil(totalItems / itemsPerPage)}
      onNext={handleNext}
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
    />
  );
};

export default PaginationComponent;
