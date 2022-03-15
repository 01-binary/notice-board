import styled from 'styled-components';
import { mediaQueries } from '@src/styles';

export const Container = styled.div`
  height: 100%;
  padding: 24px;
  ${mediaQueries('xxl')`
      margin: 0 auto;
      width: 1280px;
    `};
`;
