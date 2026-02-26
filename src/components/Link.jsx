import styled from "styled-components";

const Hyperlink = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

function Link({ children, ...props }) {
  return <Hyperlink {...props}>{children}</Hyperlink>;
}

Link.displayName = "Link";
export default Link;
