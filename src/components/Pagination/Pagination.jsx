import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, StyledButton } from './Pagination.styled';

export const Pagination = ({ totalPages = 1 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page' ?? '1'));
  const [isPrevVisible, setIsPrevVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(true);

  useEffect(() => {
    setPage(searchParams.get('page') ?? '1');
  }, [searchParams]);

  useEffect(() => {
    if (Number(page) === 1) {
      setIsPrevVisible(false);
    } else {
      setIsPrevVisible(true);
    }

    if (Number(page) === totalPages) {
      setIsNextVisible(false);
    } else {
      setIsNextVisible(true);
    }
  }, [page, totalPages]);

  const handleClick = page => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({ ...params, page });
  };

  return (
    <Container>
      {isPrevVisible && (
        <StyledButton
          type="button"
          onClick={() => {
            handleClick(Number(page) - 1);
          }}
        >
          Previous
        </StyledButton>
      )}
      {isNextVisible && (
        <StyledButton
          type="button"
          onClick={() => {
            handleClick(Number(page) + 1);
          }}
        >
          Next
        </StyledButton>
      )}
      <p>{`Page ${page} of ${totalPages}`}</p>
    </Container>
  );
};
