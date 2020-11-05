import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Spinner8 } from 'styled-icons/icomoon';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled(Spinner8)`
  animation: 2s linear ${spin} infinite;
  ${props => !props.notext && `margin-right: 6px;`}
`;

const CenterSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Loading({notext, ...props}) {
  return (
    notext
      ? <LoadingIcon notext {...props}/>
      : <CenterSpan>
          <LoadingIcon {...props}/> Loading
        </CenterSpan>
  )
}