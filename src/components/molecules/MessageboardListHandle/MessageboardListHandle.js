import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import { ReactComponent as AddIcon } from 'assets/icons/plus-square.svg';
import { Wrapper } from './MessageboardListHandle.styles';

const MessageboardListHandle = () => {
  return (
    <Wrapper>
      <Title isPrimary isBold isBig>
        Your message boards:
      </Title>
      <Button label="ADD NEW BOARD" isBig>
        <AddIcon />
      </Button>
    </Wrapper>
  );
};

export default MessageboardListHandle;
