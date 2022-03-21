import styled from 'styled-components';
import { mediaQueries } from '@src/styles';

type Props = {
  visible: boolean;
};

export const Wrapper = styled.div<Props>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const Overlay = styled.div<Props>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const InnerContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  ${mediaQueries('sm')`
    width: 90%;
    `};
  width: 550px;

  max-height: 500px;
  overflow-y: auto;
  top: 20%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const CloseButton = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
`;
