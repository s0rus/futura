import React from 'react';
import MessageboardLink from 'components/molecules/MessageLink/MessageboardLink';
import { messageboards } from 'mocks/messageboards';
import { MessageboardListItems, Wrapper } from './MessageboardList.styles';
import SectionHandle from 'components/molecules/SectionHandle/SectionHandle';
import { Button } from 'components/atoms/Button/Button';
import { ReactComponent as PlusIcon } from 'assets/icons/plus-square.svg';

const MessageboardList = () => {
  return (
    <Wrapper>
      <SectionHandle title="Your message boards:">
        <Button label="ADD NEW BOARD">
          <PlusIcon />
        </Button>
      </SectionHandle>
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
