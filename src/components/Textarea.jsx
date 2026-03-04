import { useState } from "react";
import styled from "styled-components";

const TextareaWrapper = styled.div`
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

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 12rem; /* Altura inicial generosa */
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid
    ${({ theme, $hasError }) => ($hasError ? "red" : theme.colors.primary + "33")};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  background-color: white;
  resize: vertical; /* Permite esticar apenas para baixo */
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => ($hasError ? "red" : theme.colors.primary)};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary + "11"};
  }

  &::placeholder {
    color: #ccc;
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
`;

function Textarea({ children, helperText, error, onFocus, onBlur, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  const shouldShow = !!error || (isFocused && !!helperText);

  return (
    <TextareaWrapper>
      {children && <Label>{children}</Label>}
      <StyledTextarea
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
      <Message $show={shouldShow} $isError={!!error}>
        {error || helperText}
      </Message>
    </TextareaWrapper>
  );
}

Textarea.displayName = "Textarea";
export default Textarea;
