import React, { FC } from 'react';
import Section from '@src/components/common/Layout/Section';

import Table from '@src/components/common/Table';
import Tool from '@src/components/board/Tool';

import * as S from './style';

const BoardPage: FC = () => {
  return (
    <Section>
      <S.Container>
        <Tool />
        <Table />
      </S.Container>
    </Section>
  );
};

export default BoardPage;
