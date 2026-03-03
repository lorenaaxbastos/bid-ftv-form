import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

const SelectWrapper = styled.div`
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

const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem;
  padding-right: 3rem;
  border-radius: 8px;
  border: 2px solid
    ${({ theme, $hasError }) => ($hasError ? "red" : theme.colors.primary + "33")};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  background-color: white;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:invalid {
    color: #666;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%) rotate(${({ $isOpen }) => ($isOpen ? "0deg" : "180deg")});
  pointer-events: none;
  transition: transform 0.3s ease;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const Message = styled.span`
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.main};
  min-height: 1.2rem;
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  transition: opacity 0.2s ease;
  color: #666;
`;

function Select({ label, options, helperText, value, onChange, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectWrapper>
      {label && <Label>{label}</Label>}
      <RelativeContainer>
        <StyledSelect
          value={value}
          onChange={onChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          required
          {...props}
        >
          <option value="" disabled hidden>
            Selecione uma opção...
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} style={{ color: "#202124" }}>
              {opt}
            </option>
          ))}
        </StyledSelect>
        <IconContainer $isOpen={isOpen}>
          <IoIosArrowUp />
        </IconContainer>
      </RelativeContainer>
      <Message $show={isOpen && !!helperText}>{helperText}</Message>
    </SelectWrapper>
  );
}

export default Select;
