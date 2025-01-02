import React from 'react';
import * as S from './LayoutSidebar.styled';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';

const LayoutSidebar = () => {
  /*
    관리자 페이지와 마이 페이지의 Sidebar Layout 입니다.
  */

  return (
    <S.Container>
      <Sidebar />

      <Outlet />
    </S.Container>
  );
};

export default LayoutSidebar;
