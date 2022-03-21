import React, { FC, useState, useCallback } from 'react';

import Button from '@src/components/common/Button';
import Modal from '@src/components/common/Modal';
import Loading from '@src/components/common/Loading';

import { useModalData } from '@src/hooks';

import * as S from './style';
import { ADD_POST } from '@src/assets/string';
import type { AddPostRequest, AddPostInput } from '@src/interface/posts';

const Tool: FC = () => {
  const { isModalVisible, showModal, closeModal } = useModalData();
  const [formState, SetFormState] = useState<AddPostRequest>({
    title: '',
    author: '',
    content: '',
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      alert(`${formState.title}, ${formState.author}, ${formState.content}`);
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

  const loading = false;
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
        {loading ? (
          <Loading />
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  제목:
                  <input
                    type="text"
                    value={formState.title}
                    onChange={handleChange('title')}
                    required
                  />
                </label>
              </div>

              <div>
                <label>
                  내용:
                  <input
                    type="text"
                    value={formState.content}
                    onChange={handleChange('content')}
                    required
                  />
                </label>
              </div>

              <div>
                <label>
                  작성자:
                  <input
                    type="text"
                    value={formState.author}
                    onChange={handleChange('author')}
                    required
                  />
                </label>
              </div>

              <input type="submit" value={ADD_POST} />
            </form>
          </>
        )}
      </Modal>
    </>
  );
};

export default Tool;
