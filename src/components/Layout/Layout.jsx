import { Header } from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLayout } from './Layout.styled';
import { Loading } from 'components/Loading/Loading';

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Suspense fallback={<Loading />}></Suspense>
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
