import styled from 'styled-components';
import { AvatarProps } from './Avatar';

export const AvatarContainer = styled.div<Omit<AvatarProps, 'image'>>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: '50%';
  img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`;
