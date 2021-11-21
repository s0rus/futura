import Message from 'components/molecules/Message/Message';
import MessageboardHandle from 'components/molecules/MessageboardHandle/MessageboardHandle';
import React from 'react';
import { MessagesWrapper, Wrapper } from './Messageboard.styles';
import { messages } from 'mocks/messages';

const Messageboard = () => {
  return (
    <Wrapper>
      <MessageboardHandle />
      <MessagesWrapper>
        {messages.map((message) => (
          <Message messageData={message} />
        ))}
      </MessagesWrapper>
    </Wrapper>
  );
};

export default Messageboard;
