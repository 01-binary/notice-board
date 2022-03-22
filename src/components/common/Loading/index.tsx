import React, { FC } from 'react';
import * as S from './style';

interface Props {
  height?: string;
}

const Loading: FC<Props> = ({height = '150px'}) => {
  return (
    <S.Container height={height}>
      <S.Spinner />
    </S.Container>
  );
};

export default Loading;
