import React from 'react';

import Modal from '@src/components/common/Modal';
import Loading from '@src/components/common/Loading';

import { useModalData } from './';

const useModal = (loading: boolean = false) => {
  const { isModalVisible, showModal, closeModal } = useModalData();

  const CustomModal = ({ children }) => {
    return (
      <Modal visible={isModalVisible} closeModal={closeModal}>
        {loading ? <Loading /> : <>{children}</>}
      </Modal>
    );
  };

  return {
    showModal,
    CustomModal,
  };
};

export default useModal;
