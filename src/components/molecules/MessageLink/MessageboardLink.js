import React from 'react';
import { ReactComponent as SoundwaveIcon } from 'assets/icons/soundwave.svg';
import { LinkTitle, Wrapper } from './MessageboardLink.styles';
import { Link } from 'react-router-dom';

const MessageboardLink = ({ title, messageboardID = 'messages' }) => {
  return (
    <Wrapper as={Link} to={`/${messageboardID}`}>
      <SoundwaveIcon />
      <LinkTitle>{title}</LinkTitle>
    </Wrapper>
  );
};

export default MessageboardLink;
