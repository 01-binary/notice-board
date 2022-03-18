import React, { FC } from 'react';

import * as S from './style';

const Section: FC = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Section;
