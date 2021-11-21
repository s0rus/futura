import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 225px;
  padding: 32px 0 16px 0;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 10px;
`;

export const LinkTitle = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.secondary};
`;
