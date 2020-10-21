import styled, { keyframes, css } from 'styled-components';

/* radio/checkbox seelection animation */

const selectAnim = keyframes`
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

const vanishAnim = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`;

export const animationLength = `.15s`;
export const vanishLength = `.25s`;

export const animation = css`
  ${selectAnim} ${animationLength} linear;
`;
export const vanishAnimation = css`
  ${vanishAnim} ${vanishLength} ease-out 0s 1 normal forwards;
`;
