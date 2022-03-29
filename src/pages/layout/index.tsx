import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router';

import Header from '@src/components/common/Layout/Header';
import Footer from '@src/components/common/Layout/Footer';
import Loading from '@src/components/common/Loading';

import * as S from './style';

const LayoutPage: FC = () => {
  return (
    <S.Container>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </S.Container>
  );
};

export default LayoutPage;
