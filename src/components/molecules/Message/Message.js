import React from 'react';
import { ReactComponent as SoundIcon } from 'assets/icons/soundwave.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/play.svg';
import { Button } from 'components/atoms/Button/Button';
import { LockedLabel, Wrapper } from './Message.styles';

const Message = ({ messageData }) => {
  return (
    <Wrapper isUnlocked={!messageData.locked}>
      <SoundIcon />
      {messageData.locked ? (
        <LockedLabel>Message will unlock on November 22nd, 2021</LockedLabel>
      ) : (
        <Button isPrimary label="PLAY">
          <PlayIcon />
        </Button>
      )}
    </Wrapper>
  );
};

export default Message;
