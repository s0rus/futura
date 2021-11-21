import styled from 'styled-components';

export const Wrapper = styled.li`
  min-height: 175px;
  margin: 8px 0;
  padding: 16px 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme: { colors }, isUnlocked }) => (isUnlocked ? colors.primary : colors.secondary)};
  color: ${({ theme: { colors }, isUnlocked }) => (isUnlocked ? colors.secondary : colors.primary)};
  border: 2px solid ${({ theme: { colors }, isUnlocked }) => !isUnlocked && colors.primary};
  border-radius: 10px;
`;

export const LockedLabel = styled.span`
  padding: 8px;
  border-radius: 10px;

  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.secondary};
  font-weight: bold;
`;
