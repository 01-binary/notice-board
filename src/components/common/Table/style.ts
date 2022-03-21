import styled from 'styled-components';

export const TH = styled.th`
  font-weight: 700;
  text-align: center;
  background: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 16px 24px;
`;

export const TD = styled.td`
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 16px 24px;
`;

export const HoverableTR = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: azure;
  }
`;
