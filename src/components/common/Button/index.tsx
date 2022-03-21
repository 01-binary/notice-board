import React, { FC } from 'react';
import * as S from './style';
import { ButtonSize } from '@src/assets/constants';

type ButtonProps = {
  children: string;
  size: keyof typeof ButtonSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: FC<ButtonProps> = ({ children, size = ButtonSize.medium, onClick }) => {
  return (
    <S.Button size={size} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
