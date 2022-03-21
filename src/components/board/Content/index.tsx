import React, { FC, useState, useEffect } from 'react';

import Table from '@src/components/common/Table';
import Loading from '@src/components/common/Loading';
import Modal from '@src/components/common/Modal';

import { useModalData, usePostsFetch } from '@src/hooks';

import { postColumn } from '@src/assets/columns';
import type { Post } from '@src/interface/posts';

const Content: FC = () => {
  const { isModalVisible, showModal, closeModal } = useModalData();

  // const [selectedRow, SetSelectedRow] = useState<number | null>(null);
  const { getPosts, postsLoading, posts } = usePostsFetch();

  useEffect(() => {
    getPosts();
  }, []);

  const selectedPostLoading = true;
  if (postsLoading) return <Loading />;
  return (
    <>
      <Table
        data={posts}
        columns={postColumn}
        onClick={(event) => {
          console.log(event.currentTarget.rowIndex);
          if (
            typeof event.currentTarget.rowIndex === 'number' &&
            event.currentTarget.rowIndex > 0
          ) {
            // SetSelectedRow(event.currentTarget.rowIndex);
            showModal();
          }
        }}
      />
      <Modal visible={isModalVisible} closeModal={closeModal}>
        {selectedPostLoading ? <Loading /> : <div>content</div>}
      </Modal>
    </>
  );
};

export default Content;
