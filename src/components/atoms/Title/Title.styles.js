import styled from 'styled-components';

export const Wrapper = styled.h2`
  color: ${({ theme: { colors }, isPrimary }) => (isPrimary ? colors.primary : colors.secondary)};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-size: ${({ isBig }) => (isBig ? '24px' : '16px')};
`;
