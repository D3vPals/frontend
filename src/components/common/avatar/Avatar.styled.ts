import styled from 'styled-components';
import { AvatarProps } from './Avatar';

export const AvatarContainer = styled.div<Omit<AvatarProps, 'image'>>`
  width: ${({ theme, size }) => theme.avatarSize[size].width};
  height: ${({ theme, size }) => theme.avatarSize[size].height};
  border-radius: ${({ theme, size }) => theme.avatarSize[size].borderRadius};
  img {
    width: ${({ theme, size }) => theme.avatarSize[size].width};
    height: ${({ theme, size }) => theme.avatarSize[size].height};
  }
`;
