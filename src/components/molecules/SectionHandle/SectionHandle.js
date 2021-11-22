import React from 'react';
import Title from 'components/atoms/Title/Title';
import { ButtonWrapper, Wrapper } from './SectionHandle.styles';

const SectionHandle = ({ children, title = 'Untitled board 1:' }) => {
  return (
    <Wrapper>
      <Title isPrimary isBig isBold>
        {title}
      </Title>
      <ButtonWrapper>{children}</ButtonWrapper>
    </Wrapper>
  );
};

export default SectionHandle;
