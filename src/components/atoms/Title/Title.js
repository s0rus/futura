import React from 'react';
import { Wrapper } from './Title.styles';

const Title = ({ children, isPrimary = false, isBig = false, isBold = false }) => {
  return (
    <Wrapper isPrimary={isPrimary} isBig={isBig} isBold={isBold}>
      {children}
    </Wrapper>
  );
};

export default Title;
