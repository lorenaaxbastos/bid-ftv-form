import { createGlobalStyle } from "styled-components";
import bgImage from "../assets/bg-bid-form.jpg";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.gradientRadial}, url(${bgImage}) no-repeat left / cover, ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 62.5%;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing.large};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: ${({ theme }) => theme.spacing.medium};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};

    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing.small};
    }
  }
`;
