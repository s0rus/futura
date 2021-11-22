import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 16px;
  max-height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 0;
  color: ${({ theme: { colors }, isPrimary }) => (isPrimary ? colors.primary : colors.secondary)};
  background-color: ${({ theme: { colors }, isPrimary }) => (isPrimary ? colors.secondary : colors.primary)};
  font-weight: bold;
  font-size: ${({ isBig }) => (isBig ? '24px' : '16px')};

  cursor: pointer;

  svg {
    margin-right: ${({ isLabeled }) => (isLabeled ? '8px' : '0')};
    height: ${({ theme: { fontSizes }, isBig }) => (isBig ? fontSizes.large : fontSizes.medium)};
    width: auto;

    g,
    path {
      fill: ${({ theme: { colors }, isPrimary }) => (isPrimary ? colors.primary : colors.secondary)};
      fill: ${({ theme: { colors }, isMinified }) => isMinified && colors.primary};
    }
  }

  background-color: ${({ isMinified }) => isMinified && 'transparent'};
  color: ${({ theme: { colors }, isMinified }) => isMinified && colors.primary};
  border: 2px solid ${({ theme: { colors }, isMinified, isPrimary }) => (isMinified && isPrimary ? colors.secondary : colors.primary)};
`;
