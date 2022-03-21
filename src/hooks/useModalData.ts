import { useCallback, useState } from 'react';

const useModalData = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return {
    isModalVisible,
    showModal,
    closeModal,
  };
};

export default useModalData;
