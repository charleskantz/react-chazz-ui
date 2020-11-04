import React from 'react';
import { StyledCard } from './Card';


export function Card({ children, ...props}) {
  return (
    <StyledCard {...props}>
      {children}
    </StyledCard>
  )
}