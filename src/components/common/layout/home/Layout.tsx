import React from 'react';
import * as S from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Header from '../../header/Header';

const Layout = () => {
  /*
    전체 페이지의 Header Layout 입니다.
  */

  return (
    <S.Container>
      <Header />

      <Outlet />
    </S.Container>
  );
};

export default Layout;
