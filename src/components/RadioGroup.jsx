import styled from "styled-components";

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: 1.5rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 2px solid ${(props) => (props.checked ? props.theme.colors.primary : "#eee")};
  border-radius: 12px;
  cursor: pointer;
  background-color: ${(props) =>
    props.checked ? props.theme.colors.primary + "08" : "white"};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const CustomCircle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => (props.checked ? props.theme.colors.primary : "#ccc")};
  border-radius: 50%;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    display: ${(props) => (props.checked ? "block" : "none")};
  }
`;

const OptionText = styled.span`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

function RadioGroup({ options, value, onChange, name, style, className }) {
  return (
    <GroupContainer style={style} className={className}>
      {options.map((opt) => (
        <RadioLabel key={opt.value} checked={value === opt.value}>
          <HiddenRadio
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
          />
          <CustomCircle checked={value === opt.value} />
          <OptionText>{opt.label}</OptionText>
        </RadioLabel>
      ))}
    </GroupContainer>
  );
}

RadioGroup.displayName = "RadioGroup";
export default RadioGroup;
