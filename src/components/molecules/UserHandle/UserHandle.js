import React from 'react';
import { UserAvatar, UserFullname, Wrapper } from './UserHandle.styles';

const UserHandle = () => {
  return (
    <Wrapper>
      <UserAvatar>P</UserAvatar>
      <UserFullname>Piotr Mól</UserFullname>
    </Wrapper>
  );
};

export default UserHandle;
