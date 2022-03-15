import React, { FC } from 'react';
import * as S from './style';

import Header from './Header';
import Content from './Section';
import Footer from './Footer';

const Layout: FC = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </S.Container>
  );
};

export default Layout;
