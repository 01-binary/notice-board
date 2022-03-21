import React, { FC, useState } from 'react';

import Table from '@src/components/common/Table';

import { useModal } from '@src/hooks';

import { boardColumn } from '@src/assets/columns';
import type { BoardList } from '@src/types/board';

const mock: BoardList[] = [
  {
    id: 1,
    title: '테스트',
    author: '이진수',
    createdAt: '123',
  },
  {
    id: 2,
    title: '테스트1',
    author: '이진수1',
    createdAt: '123',
  },
  {
    id: 3,
    title: '테스트2',
    author: '이진수2',
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
        columns={boardColumn}
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
