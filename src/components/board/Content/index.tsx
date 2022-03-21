import React, { FC, useState } from 'react';

import Table from '@src/components/common/Table';

import { useModal } from '@src/hooks';

import { postColumn } from '@src/assets/columns';
import type { Post } from '@src/interface/posts';

const mock: Post[] = [
  {
    id: 1,
    title: '테스트',
    author: '이진수',
    content: '테스트1',
    createdAt: '123',
  },
  {
    id: 2,
    title: '테스트1',
    author: '이진수1',
    content: '테스트2',
    createdAt: '123',
  },
  {
    id: 3,
    title: '테스트2',
    author: '이진수2',
    content: '테스트3',
    createdAt: '123',
  },
];

const Content: FC = () => {
  const { showModal, CustomModal } = useModal(true);
  const [selectedRow, SetSelectedRow] = useState<number | null>(null);
  return (
    <>
      <Table
        data={mock}
        columns={postColumn}
        onClick={(event) => {
          console.log(event.currentTarget.rowIndex);
          if (
            typeof event.currentTarget.rowIndex === 'number' &&
            event.currentTarget.rowIndex !== 0
          ) {
            SetSelectedRow(event.currentTarget.rowIndex);
            showModal();
          }
        }}
      />
      <CustomModal>
        <div>content</div>
      </CustomModal>
    </>
  );
};

export default Content;
