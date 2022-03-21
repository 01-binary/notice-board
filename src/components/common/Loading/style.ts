import styled from 'styled-components';
import Logo from '@src/components/common/Logo';

export const Container = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled(Logo)`
  transform-origin: 50% 50%;
  animation: spin 1.5s cubic-bezier(0.8, 0, 0.2, 1) infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
