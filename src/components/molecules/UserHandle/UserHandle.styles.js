import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Montserrat', sans-serif;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;

  background-color: salmon;
  color: ${({ theme: { colors } }) => colors.secondary};

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserFullname = styled.h1`
  padding-left: 8px;

  font-weight: normal;
`;
