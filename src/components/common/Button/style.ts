import styled, { css } from 'styled-components';
import { ButtonSize } from '@src/assets/constants';

interface Props {
  size: keyof typeof ButtonSize;
}

type Size = Pick<Props, 'size'>;

const sizeStyles = css<Size>`
  ${(props) =>
    props.size === 'large' &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `}
`;

export const Button = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 16px;
  font-weight: bold;
  padding: 1rem;
  background-color: #f0f1ff;
  cursor: pointer;
  &:hover {
    background-color: antiquewhite;
  }
  ${sizeStyles}
`;
