import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 100%;
  background: ${p => p.bg ? p.bg : `#FFFFFF`};
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: ${p => p.theme.grid.cornerRadius};
  padding: 30px;
`;