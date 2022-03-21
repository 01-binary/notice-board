import React, { FC } from 'react';
import Button from '@src/components/common/Button';
import { useModal } from '@src/hooks';

import * as S from './style';
import { ADD_POST } from '@src/assets/string';

const Tool: FC = () => {
  const { showModal, CustomModal } = useModal(false);

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
      <CustomModal>
        <div>Form Need</div>
      </CustomModal>
    </>
  );
};

export default Tool;
