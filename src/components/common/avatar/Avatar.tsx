import React, { ReactNode } from 'react';
import * as S from './Avatar.styled';
import { AvatarSize } from '../../../style/theme';

export interface AvatarProps {
  size: AvatarSize;
  image: string | ReactNode;
}

function Avatar({ size, image }: AvatarProps) {
  return (
    <S.AvatarContainer size={size}>
      {typeof image === 'string' ? <img src={image} alt="Avatar" /> : image}
    </S.AvatarContainer>
  );
}

export default Avatar;
