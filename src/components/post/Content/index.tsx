import React, { FC } from 'react';

import Table from '@src/components/common/Table';

import { usePostsData } from '@src/hooks';

import { postColumn } from '@src/assets/columns';

const Content: FC = () => {
  const { posts } = usePostsData();

  return (
    <>
      <Table
        data={posts}
        columns={postColumn}
      />
    </>
  );
};

export default Content;
