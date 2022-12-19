import React, { FC } from 'react';
import Section from '@src/components/common/Layout/Section';

import Tool from '@src/components/post/Tool';

import * as S from './style';
import { usePostsFetch } from '@src/hooks';
import Table from '@src/components/common/Table';
import { postColumn } from '@src/assets/columns';

const PostPage: FC = () => {
  const { posts, total } = usePostsFetch();

  return (
    <Section>
      <S.Container>
        <Tool total={total} />
        <Table data={posts} columns={postColumn} />
      </S.Container>
    </Section>
  );
};

export default PostPage;
