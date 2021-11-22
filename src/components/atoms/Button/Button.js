import { StyledButton } from './Button.styles';

export const Button = ({ children, label, isBig = false, isPrimary = false, isMinified, ...props }) => (
  <StyledButton isBig={isBig} isPrimary={isPrimary} isLabeled={label} isMinified={isMinified} {...props}>
    {children ? children : null} {label}
  </StyledButton>
);
