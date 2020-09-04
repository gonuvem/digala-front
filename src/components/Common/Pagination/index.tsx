import React, { useMemo } from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

import { Container, PageButton } from './styles';

interface PaginationProps {
  totalPages: number;
  actualPage: number;
  numberOfPagesToShow: number;
  onPageChange(page: number): void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  actualPage,
  numberOfPagesToShow,
  onPageChange,
}) => {
  const pagesToShow = useMemo(() => {
    let decrement = -1;
    const pages: number[] = [];

    if (totalPages === 0) {
      return pages;
    }

    if (actualPage === 0) {
      decrement = 0;
    }

    if (actualPage === totalPages - 1) {
      decrement = -2;
    }

    while (pages.length < numberOfPagesToShow) {
      pages.push(actualPage + decrement);
      decrement += 1;
    }

    return pages;
  }, [actualPage, totalPages, numberOfPagesToShow]);

  const showChevronLeft = useMemo(() => {
    return actualPage !== 0;
  }, [actualPage]);

  const showChevronRight = useMemo(() => {
    return actualPage !== totalPages - 1 && totalPages > 0;
  }, [actualPage, totalPages]);

  return (
    <Container>
      {showChevronLeft && (
        <MdChevronLeft size={32} onClick={() => onPageChange(actualPage - 1)} />
      )}
      {pagesToShow.map((page) => (
        <PageButton
          key={`page-button-${page}`}
          onClick={() => onPageChange(page)}
          selected={page === actualPage}
          type="button"
        >
          {page + 1}
        </PageButton>
      ))}
      {showChevronRight && (
        <MdChevronRight
          size={32}
          onClick={() => onPageChange(actualPage + 1)}
        />
      )}
    </Container>
  );
};

export default Pagination;
