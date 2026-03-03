import { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: bold;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledInput = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid
    ${({ theme, $hasError }) => ($hasError ? "red" : theme.colors.primary + "33")};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => ($hasError ? "red" : theme.colors.primary)};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary + "11"};
  }
`;

const Message = styled.span`
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.main};
  min-height: 1.2rem;
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  transition: opacity 0.2s ease;
  color: ${({ $isError }) => ($isError ? "red" : "#666")};
  margin-top: 0.2rem;
`;

function Input({ label, helperText, error, onFocus, onBlur, ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  const shouldShow = !!error || (isFocused && !!helperText);
  const isErrorActive = !!error;

  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput
        $hasError={!!error}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        {...props}
      />

      <Message $show={shouldShow} $isError={isErrorActive}>
        {error || helperText}
      </Message>
    </InputWrapper>
  );
}

Input.displayName = "Input";
export default Input;
