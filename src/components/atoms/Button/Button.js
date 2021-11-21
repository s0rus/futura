import { StyledButton } from './Button.styles';

export const Button = ({ children, label, isBig = false, isPrimary = false, isMinified }) => (
  <StyledButton isBig={isBig} isPrimary={isPrimary} isLabeled={label} isMinified={isMinified}>
    {children ? children : null} {label}
  </StyledButton>
);
