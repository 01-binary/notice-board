import React, { FC } from 'react';
import Section from '@src/components/Layout/Section';

import Tool from '@src/components/Tool';
import * as S from './style';

const BoardPage: FC = () => {
  return (
    <Section>
      <S.Container>
        <Tool />
        <div>table</div>
      </S.Container>
    </Section>
  );
};

export default BoardPage;
