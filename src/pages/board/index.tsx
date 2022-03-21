import React, { FC } from 'react';
import Section from '@src/components/common/Layout/Section';

import Tool from '@src/components/board/Tool';
import Content from '@src/components/board/Content';

import * as S from './style';

const BoardPage: FC = () => {
  return (
    <Section>
      <S.Container>
        <Tool />
        <Content />
      </S.Container>
    </Section>
  );
};

export default BoardPage;
