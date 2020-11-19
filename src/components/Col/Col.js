import styled from 'styled-components';

export const StyledCol = styled.div`
  position: relative;
  width: 100%;
  max-width: ${p => p.span ? p.span : `100%`};
  flex-grow: 1;
  flex-basis: 0;
  flex: 0 0 ${p => p.span ? p.span : `100%`};
  order: ${p => p.order ? p.order : `inherit`};
  ${p => p.offset && `margin-left: ${p.offset};`}

  ${p => p.sm && `
    @media (min-width: ${p.theme.grid.breakpoints.sm}) {
      max-width: ${p.sm.span ? p.sm.span : `100%`};
      flex: 0 0 ${p.sm.span ? p.sm.span : `100%`};
      order: ${p.sm.order ? p.sm.order : `inherit`};
      ${p.sm.offset && `margin-left: ${p.sm.offset};`}
    }
  `}

  ${p => p.md && `
    @media (min-width: ${p.theme.grid.breakpoints.md}) {
      max-width: ${p.md.span ? p.md.span : `100%`};
      flex: 0 0 ${p.md.span ? p.md.span : `100%`};
      order: ${p.md.order ? p.md.order : `inherit`};
      ${p.md.offset && `margin-left: ${p.md.offset};`}
    }
  `}

  ${p => p.lg && `
    @media (min-width: ${p.theme.grid.breakpoints.lg}) {
      max-width: ${p.lg.span ? p.lg.span : `100%`};
      flex: 0 0 ${p.lg.span ? p.lg.span : `100%`};
      order: ${p.lg.order ? p.lg.order : `inherit`};
      ${p.lg.offset && `margin-left: ${p.lg.offset};`}
    }
  `}

  ${p => p.xl && `
    @media (min-width: ${p.theme.grid.breakpoints.xl}) {
      max-width: ${p.xl.span ? p.xl.span : `100%`};
      flex: 0 0 ${p.xl.span ? p.xl.span : `100%`};
      order: ${p.xl.order ? p.xl.order : `inherit`};
      ${p.xl.offset && `margin-left: ${p.xl.offset};`}
    }
  `}


`;