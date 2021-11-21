import React from 'react';
import MessageboardListHandle from 'components/molecules/MessageboardListHandle/MessageboardListHandle';
import MessageboardLink from 'components/molecules/MessageLink/MessageboardLink';
import { messageboards } from 'mocks/messageboards';
import { MessageboardListItems, Wrapper } from './MessageboardList.styles';

const MessageboardList = () => {
  return (
    <Wrapper>
      <MessageboardListHandle />
      <MessageboardListItems>
        {messageboards.map((messageboard, index) => (
          <li key={index}>
            <MessageboardLink title={messageboard.title || `Untitled board ${index + 1}`} />
          </li>
        ))}
      </MessageboardListItems>
    </Wrapper>
  );
};

export default MessageboardList;
