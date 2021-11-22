import React from 'react';
import Message from 'components/molecules/Message/Message';
import { MessagesWrapper, Wrapper } from './Messageboard.styles';
import { messages } from 'mocks/messages';
import SectionHandle from 'components/molecules/SectionHandle/SectionHandle';
import { Button } from 'components/atoms/Button/Button';
import { ReactComponent as AddIcon } from 'assets/icons/plus-square.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';

const Messageboard = () => {
  return (
    <Wrapper>
      <SectionHandle title="Untitled Board 1:">
        <Button label="SHARE BOARD" isMinified>
          <ShareIcon />
        </Button>
        <Button label="NEW MESSAGE">
          <AddIcon />
        </Button>
      </SectionHandle>
      <MessagesWrapper>
        {messages.map((message, index) => (
          <Message key={index} messageData={message} />
        ))}
      </MessagesWrapper>
    </Wrapper>
  );
};

export default Messageboard;
