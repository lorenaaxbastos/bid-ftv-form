import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  margin: ${({ theme }) => theme.spacing.medium} 0;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: 1rem;
`;

function HighlightBox({ children }) {
  return <Container>{children}</Container>;
}

HighlightBox.displayName = "HighlightBox";
export default HighlightBox;
