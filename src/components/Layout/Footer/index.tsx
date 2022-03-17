import React, { FC } from 'react';

import { FOOTER_MESSAGE } from '@src/assets/string';
import * as S from './style';

const Footer: FC = () => {
  return (
    <S.Wrapper>
      {FOOTER_MESSAGE}
    </S.Wrapper>
  );
};

export default Footer;
