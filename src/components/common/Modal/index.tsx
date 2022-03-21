import React, { FC } from 'react';
import Portal from '@src/components/common/Portal';
import * as S from './style';

type Props = {
  children: React.ReactNode;
  visible: boolean;
  closeModal: () => void;
};

const Modal: FC<Props> = ({ visible, children, closeModal }) => {
  return (
    <Portal elementId="modal">
      <S.Overlay visible={visible} />
      <S.Wrapper tabIndex={-1} visible={visible}>
        <S.InnerContainer tabIndex={0}>
          <S.ButtonWrapper>
            <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>
          </S.ButtonWrapper>
          {children}
        </S.InnerContainer>
      </S.Wrapper>
    </Portal>
  );
};

export default Modal;
