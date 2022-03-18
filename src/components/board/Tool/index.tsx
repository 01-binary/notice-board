import React, { FC } from 'react';
import Button from '@src/components/common/Button';

import * as S from './style';
import { ADD_BOARD } from '@src/assets/string';

const Tool: FC = () => {
  return (
    <S.Container>
      <Button size={'medium'}>
        {ADD_BOARD}
      </Button>
    </S.Container>
  );
};

export default Tool;
