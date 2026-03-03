import styled from "styled-components";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Container = styled.fieldset`
  border: none;
  max-width: 50rem;
  margin: 0 auto;
  flex-grow: 1;
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing.medium};
  gap: 0.5rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
    flex-direction: column;
  }
`;

function Section({ number, setNumber, data, handlers, meetingOptions, greOptions }) {
  const titles = {
    0: "Olá, professora! Olá, professor!",
    1: "Política de Privacidade",
    2: "Agendamento",
    3: "Coleta de presença",
    4: "Obrigada pela participação!",
  };

  return (
    <>
      <Container>
        <SectionTitle title={titles[number]} />

        {number === 0 && <Section1 />}
        {number === 1 && <Section2 data={data} handlers={handlers} />}
        {number === 2 && (
          <Section3 data={data} handlers={handlers} options={meetingOptions} />
        )}
        {number === 3 && (
          <Section4 data={data} handlers={handlers} options={greOptions} />
        )}
        {number === 4 && <Section5 data={data} />}
      </Container>

      {number < 4 && (
        <Navigation>
          {number > 0 && (
            <Button type="button" onClick={() => setNumber(number - 1)}>
              Voltar
            </Button>
          )}

          <Button
            type="submit"
            style={{ marginLeft: "auto" }}
            disabled={number === 1 && !data.acceptedTerms}
          >
            {number === 3 ? "Enviar respostas" : "Avançar"}
          </Button>
        </Navigation>
      )}
    </>
  );
}

Section.displayName = "Section";
export default Section;
