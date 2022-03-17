import styled from 'styled-components';
import { mediaQueries } from '@src/styles';

export const Container = styled.div`
  position: relative;
  height: 100%;
  padding: 24px;
  background-color: #fff !important;
  ${mediaQueries('xxl')`
      margin: 0 auto;
      width: 1280px;
    `};
`;
