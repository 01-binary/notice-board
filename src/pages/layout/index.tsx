import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router';

import Loading from '@src/components/common/Loading';

import * as S from './style';
import Footer from '@src/components/common/Layout/Footer';

const LayoutPage: FC = () => {
  return (
    <S.Container>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </S.Container>
  );
};

export default LayoutPage;
