import React, { useRef } from 'react';
import { ReactComponent as SoundIcon } from 'assets/icons/soundwave.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/play.svg';
import { ReactComponent as LockIcon } from 'assets/icons/lock.svg';
import { Button } from 'components/atoms/Button/Button';
import { LockedLabel, Wrapper } from './Message.styles';
import SoundMock from 'mocks/sound-mock.mp3';

const Message = ({ messageData }) => {
  const PlayerRef = useRef(null);

  const handlePlay = () => PlayerRef.current.play();

  return (
    <Wrapper isUnlocked={!messageData.locked}>
      {messageData.locked ? (
        <>
          <LockIcon className="locked" />
          <LockedLabel>Message will unlock on November 22nd, 2021</LockedLabel>
        </>
      ) : (
        <>
          <SoundIcon />
          <Button label="PLAY" isPrimary onClick={handlePlay}>
            <PlayIcon />
          </Button>
          <audio ref={PlayerRef} controls>
            <source src={SoundMock}></source>
          </audio>
        </>
      )}
    </Wrapper>
  );
};

export default Message;
