import React, { FC } from 'react';
import * as S from './style';
import { ButtonSize } from '@src/assets/constants';

type ButtonProps = {
  children: string;
  size: keyof typeof ButtonSize;
};

const Button: FC<ButtonProps> = ({ children, size = ButtonSize.medium }) => {
  return <S.Button size={size}>{children}</S.Button>;
};

export default Button;
