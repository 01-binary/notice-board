import React, { FC } from 'react';
import * as S from './style';

const Loading: FC = () => {
  return (
    <S.Container>
      <S.Spinner />
    </S.Container>
  );
};

export default Loading;
