import React from 'react';
import { ReactComponent as SoundwaveIcon } from 'assets/icons/soundwave.svg';
import { LinkTitle, Wrapper } from './MessageboardLink.styles';

const MessageboardLink = ({ title }) => {
  return (
    <Wrapper as="a" href="/xD">
      <SoundwaveIcon />
      <LinkTitle>{title}</LinkTitle>
    </Wrapper>
  );
};

export default MessageboardLink;
