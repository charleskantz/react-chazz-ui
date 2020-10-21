import styled, { keyframes, css } from 'styled-components';

/* radio/checkbox seelection animation */

export const selectAnim = keyframes`
  0% {
    box-shadow: 0 0 0 0 white
  }
  50% {
    box-shadow: 0 0 0 2px #006FBB
  }
  100% {
    box-shadow: 0 0 0 4px white
  }
`;

export const animationLength = `.15s`;

export const animation = css`
  ${selectAnim} ${animationLength} linear;
`;
