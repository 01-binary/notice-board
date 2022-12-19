import React, { FC, useEffect } from 'react';
import Section from '@src/components/common/Layout/Section';

import Tool from '@src/components/post/Tool';
import Content from '@src/components/post/Content';

import * as S from './style';
import { usePostsFetch } from '@src/hooks';

const PostPage: FC = () => {
  const { getPosts } = usePostsFetch();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Section>
      <S.Container>
        <Tool />
        <Content />
      </S.Container>
    </Section>
  );
};

export default PostPage;
