import Button from "./Button";
import styled from "styled-components";

const StyledButtonLink = styled(Button).attrs({ as: "a" })`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme, $variant }) =>
    $variant === "secondary" ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme, $variant }) =>
    $variant === "secondary" ? theme.colors.primary : theme.colors.white};
  border-radius: 1000px;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.main};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme, $variant }) =>
      $variant === "secondary" ? theme.colors.primary : theme.colors.text};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    display: inline-block;
    text-align: center;
  }
`;

function Section5({ data }) {
  return (
    <>
      <p>Sua resposta foi enviada com sucesso.</p>
      <p>
        A formação online a respeito dos elementos de Inteligência Artificial que serão
        incorporados ao curso técnico de Desenvolvimento de Games acontecerá em 17/03 no
        horário selecionado ({data.selectedHour}).
      </p>
      <p style={{ marginBottom: "2rem", marginTop: "3rem" }}>
        Clique no botão a seguir para adicionar a formação à sua Agenda Google:
      </p>

      <StyledButtonLink
        href={data.calendarLink}
        target="_blank"
        rel="noopener noreferrer"
        $variant="secondary"
      >
        Salvar evento
      </StyledButtonLink>
    </>
  );
}

Section5.displayName = "Section5";
export default Section5;
