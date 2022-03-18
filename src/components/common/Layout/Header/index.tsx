import React, { FC } from 'react';
import Logo from '@src/components/common/Logo';
import * as S from './style';

const Header: FC = () => {
  return (
    <S.Container>
      <Logo />
    </S.Container>
  );
};

export default Header;
