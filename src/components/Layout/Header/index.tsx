import React, { FC } from 'react';
import Logo from '@src/components/Logo';
import * as S from './style';

const Header: FC = () => {
  return (
    <S.Container>
      <Logo />
    </S.Container>
  );
};

export default Header;
