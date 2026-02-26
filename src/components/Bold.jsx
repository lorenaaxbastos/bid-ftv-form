import styled from "styled-components";

const Text = styled.span`
  font-weight: bold;
`;

function Bold({ children }) {
  return <Text>{children}</Text>;
}

Bold.displayName = "Bold";
export default Bold;
