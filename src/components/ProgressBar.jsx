import styled from "styled-components";

const Bar = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  width: 100%;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 1000px;
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: width 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 0;
`;

function ProgressBar({ value, max }) {
  const percentage = (value / max) * 100;

  return (
    <Bar>
      <Fill style={{ width: `${percentage}%` }}>
        {value > 0 && <Label>{percentage}%</Label>}
      </Fill>
    </Bar>
  );
}

ProgressBar.displayName = "ProgressBar";
export default ProgressBar;
