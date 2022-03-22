import React, { FC, useState, useCallback } from 'react';

import Button from '@src/components/common/Button';
import Modal from '@src/components/common/Modal';
import Loading from '@src/components/common/Loading';

import { useAddPostFetch, useModalData } from '@src/hooks';

import * as S from './style';
import { ADD_POST, TITLE, CONTENT, AUTHOR } from '@src/assets/string';
import type { AddPostRequest, AddPostInput } from '@src/interface/posts';

const Tool: FC = () => {
  const { isModalVisible, showModal, closeModal } = useModalData();
  const { addPost, addPostLoading } = useAddPostFetch();
  const [formState, SetFormState] = useState<AddPostRequest>({
    title: '',
    author: '',
    content: '',
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      addPost({ addPostRequest: { ...formState }, onSuccess: closeModal });
    },
    [formState],
  );

  const handleChange = (input: AddPostInput) => (event) => {
    switch (input) {
      case 'title':
        SetFormState({ ...formState, title: event.target.value });
        break;
      case 'author':
        SetFormState({ ...formState, author: event.target.value });
        break;
      case 'content':
        SetFormState({ ...formState, content: event.target.value });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <S.Container>
        <Button
          size={'medium'}
          onClick={() => {
            showModal();
          }}
        >
          {ADD_POST}
        </Button>
      </S.Container>
      <Modal visible={isModalVisible} closeModal={closeModal}>
        {addPostLoading ? (
          <Loading />
        ) : (
          <>
            <S.Form onSubmit={handleSubmit}>
              <S.FormRowContainer>
                <S.Label>{TITLE}</S.Label>
                <S.Input
                  type="text"
                  value={formState.title}
                  onChange={handleChange('title')}
                  required
                />
              </S.FormRowContainer>

              <S.FormRowContainer>
                <S.Label>{CONTENT}</S.Label>
                <S.TextArea
                  rows={1}
                  value={formState.content}
                  onChange={handleChange('content')}
                  required
                />
              </S.FormRowContainer>

              <S.FormRowContainer>
                <S.Label>{AUTHOR}</S.Label>
                <S.Input
                  type="text"
                  value={formState.author}
                  onChange={handleChange('author')}
                  required
                />
              </S.FormRowContainer>
              <S.SubmitContainer>
                <S.SubmitInput type="submit" value={ADD_POST} />
              </S.SubmitContainer>
            </S.Form>
          </>
        )}
      </Modal>
    </>
  );
};

export default Tool;
