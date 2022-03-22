import React, { FC, useEffect } from 'react';

import Table from '@src/components/common/Table';
import Loading from '@src/components/common/Loading';
import Modal from '@src/components/common/Modal';

import { useModalData, usePostsFetch, useSelectedPostFetch } from '@src/hooks';

import * as S from './style';
import { TITLE, AUTHOR } from '@src/assets/string';
import { postColumn } from '@src/assets/columns';

const Content: FC = () => {
  const { isModalVisible, showModal, closeModal } = useModalData();
  const { getPosts, postsLoading, posts } = usePostsFetch();
  const { getSelectedPost, selectedPostLoading, selectedPost } =
    useSelectedPostFetch();

  console.log(selectedPost);
  useEffect(() => {
    getPosts();
  }, []);

  if (postsLoading) return <Loading />;
  return (
    <>
      <Table
        data={posts}
        columns={postColumn}
        onClick={(event) => {
          if (
            typeof event.currentTarget.rowIndex === 'number' &&
            event.currentTarget.rowIndex > 0
          ) {
            getSelectedPost(event.currentTarget.rowIndex);
            showModal();
          }
        }}
      />
      <Modal visible={isModalVisible} closeModal={closeModal}>
        {selectedPostLoading ? (
          <Loading />
        ) : (
          <S.Container>
            <S.TitleWrapper>{`${TITLE} ${selectedPost?.title}`}</S.TitleWrapper>
            <S.AuthorWrapper>{`${AUTHOR} ${selectedPost?.author}`}</S.AuthorWrapper>
            <S.ContentWrapper>{`${selectedPost?.content}`}</S.ContentWrapper>
            <S.CreatedAtWrapper>{`${selectedPost?.createdAt}`}</S.CreatedAtWrapper>
          </S.Container>
        )}
      </Modal>
    </>
  );
};

export default Content;
