import React from 'react';
import { Logo, MenuWrapper, Wrapper } from './NavigationBar.styles';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Wrapper>
      <Logo>futura</Logo>
      <MenuWrapper>
        <Link to="/messageboards">Messageboards</Link>
      </MenuWrapper>
    </Wrapper>
  );
};

export default NavigationBar;
