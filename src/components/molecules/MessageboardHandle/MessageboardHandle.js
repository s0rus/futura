import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import { Wrapper } from '../MessageboardListHandle/MessageboardListHandle.styles';
import { ReactComponent as AddIcon } from 'assets/icons/plus-square.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';
import { ButtonWrapper } from './MessageboardHandle.styles';

const MessageboardHandle = ({ title = 'Untitled board 1:' }) => {
  return (
    <Wrapper>
      <Title isPrimary isBig isBold>
        {title}
      </Title>
      <ButtonWrapper>
        <Button label="SHARE BOARD" isMinified>
          <ShareIcon />
        </Button>
        <Button label="NEW MESSAGE">
          <AddIcon />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MessageboardHandle;
