import styled from 'styled-components';

export const StyledCol = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => props.span ? props.span : `100%`};
  flex-grow: 1;
  flex-basis: 0;
  flex: 0 0 ${props => props.span ? props.span : `100%`};
  ${props => props.offset && `margin-left: ${props.offset};`}

`;