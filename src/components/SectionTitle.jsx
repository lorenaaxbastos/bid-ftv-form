import styled from "styled-components";

const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

function SectionTitle({ title }) {
  return <Title>{title}</Title>;
}

SectionTitle.displayName = "SectionTitle";
export default SectionTitle;
