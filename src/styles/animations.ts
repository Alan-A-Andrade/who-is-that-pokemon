import { keyframes } from 'styled-components';

export const expandFoward = keyframes`
 0% {
  transform: translate(0px, -1em);
  transform: scale(0, 1);
  opacity: 0
}
 100% {
  transform: translate(0px, 0px);
  transform: scale(1, 1);
  opacity: 1
}
`;
