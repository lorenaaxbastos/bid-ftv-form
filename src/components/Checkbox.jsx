import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledBox = styled.div`
  margin-top: -3px;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? props.theme.colors.primary : "transparent")};
  border: 2px solid ${(props) => (props.checked ? props.theme.colors.primary : "#ccc")};
  border-radius: 4px;
  transition: all 150ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    display: ${(props) => (props.checked ? "block" : "none")};
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-bottom: 2px;
  }

  ${CheckboxContainer}:hover & {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

function Checkbox({ label, checked, onChange }) {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledBox checked={checked} />
      {label && <span>{label}</span>}
    </CheckboxContainer>
  );
}

export default Checkbox;
