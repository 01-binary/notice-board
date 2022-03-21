import React, { FC } from 'react';
import Section from '@src/components/common/Layout/Section';

import Table from '@src/components/common/Table';
import Tool from '@src/components/board/Tool';

import { boardColumn } from '@src/assets/columns';
import type { BoardInput } from '@src/types/board';
import * as S from './style';

const mock: BoardInput[] = [
  {
    id: 0,
    title: '테스트',
    author: '이진수',
    createdAt: '123',
  },
  {
    id: 1,
    title: '테스트1',
    author: '이진수1',
    createdAt: '123',
  },
  {
    id: 2,
    title: '테스트2',
    author: '이진수2',
    createdAt: '123',
  },
];

const BoardPage: FC = () => {
  return (
    <Section>
      <S.Container>
        <Tool />
        <Table data={mock} columns={boardColumn} />
      </S.Container>
    </Section>
  );
};

export default BoardPage;
