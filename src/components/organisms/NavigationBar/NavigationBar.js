import UserHandle from 'components/molecules/UserHandle/UserHandle';
import React from 'react';
import { Logo, Wrapper } from './NavigationBar.styles';

const NavigationBar = () => {
  return (
    <Wrapper>
      <Logo>futura</Logo>
      <UserHandle />
    </Wrapper>
  );
};

export default NavigationBar;
