import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme, $variant }) =>
    $variant === "secondary" ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme, $variant }) =>
    $variant === "secondary" ? theme.colors.primary : theme.colors.white};
  border-radius: 1000px;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.main};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme, $variant }) =>
      $variant === "secondary" ? theme.colors.primary : theme.colors.text};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    display: inline-block;
    text-align: center;
  }
`;

function Button({ children, variant = "primary", ...props }) {
  return (
    <StyledButton {...props} $variant={variant}>
      {children}
    </StyledButton>
  );
}

Button.displayName = "Button";
export default Button;
