import { useState } from "react";
import styled from "styled-components";
import logos from "./assets/logos.png";
import Section from "./components/Section";
import ProgressBar from "./components/ProgressBar";
import maskCPF from "./utils/format";

const Container = styled.main`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.4rem;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 65rem;
  min-height: 35rem;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
`;

const Logos = styled.img`
  display: block;
  width: fit-content;
  max-width: 100%;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

const MEETINGS = [
  {
    id: "10:00",
    label: "10:00 às 12:00",
    link: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20260317T130000Z%2F20260317T150000Z&details=&location=https%3A%2F%2Fmeet.google.com%2Ftjv-yoid-ebz&text=Forma%C3%A7%C3%A3o%20de%20Professores%201%20%28Manh%C3%A3%29",
  },
  {
    id: "14:00",
    label: "14:00 às 16:00",
    link: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20260317T170000Z%2F20260317T190000Z&details=&location=https%3A%2F%2Fmeet.google.com%2Ftjv-yoid-ebz&text=Forma%C3%A7%C3%A3o%20de%20professores%202%20%28Tarde%29",
  },
  {
    id: "16:30",
    label: "16:30 às 18:30",
    link: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20260317T193000Z%2F20260317T213000Z&details=&location=https%3A%2F%2Fmeet.google.com%2Ftjv-yoid-ebz&text=Forma%C3%A7%C3%A3o%20de%20professores%203%20%28Tarde%29",
  },
];

const GRES = [
  "01ª GRE - Parnaíba",
  "02ª GRE - Barras",
  "03ª GRE - Piripiri",
  "04ª GRE - Teresina",
  "05ª GRE - Campo Maior",
  "06ª GRE - Regeneração",
  "07ª GRE - Valença",
  "08ª GRE - Oeiras",
  "09ª GRE - Picos",
  "10ª GRE - Floriano",
  "11ª GRE - Uruçuí",
  "12ª GRE - São João do Piauí",
  "13ª GRE - São Raimundo Nonato",
  "14ª GRE - Bom Jesus",
  "15ª GRE - Corrente",
  "16ª GRE - Fronteiras",
  "17ª GRE - Paulistana",
  "18ª GRE - Grande Teresina",
  "19ª GRE - Grande Teresina",
  "20ª GRE - Grande Teresina",
  "21ª GRE - Grande Teresina",
  "Ainda não sei em qual GRE vou atuar",
];

function App() {
  const [number, setNumber] = useState(0);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [hour, setHour] = useState(MEETINGS[0].id);
  const [fullName, setFullName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [gre, setGre] = useState("");

  const data = {
    acceptedTerms: acceptedTerms,
    selectedHour: hour,
    calendarLink: MEETINGS.find((m) => m.id === hour)?.link,
    fullName: fullName,
    cpf: cpf,
    email: email,
    gre: gre,
  };

  const handlers = {
    setHour,
    setFullName,
    setCpf: (val) => setCpf(maskCPF(val)),
    setEmail,
    setAcceptedTerms,
    setGre,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (number === 3) {
      console.log("Dados enviados com sucesso!", data);
      setNumber(4);
    } else if (number < 3) {
      setNumber(number + 1);
    }
  };

  return (
    <Container>
      <Title>Formulário de Inscrição</Title>

      <Form onSubmit={handleFormSubmit}>
        <ProgressBar value={number} max={4} />
        <Section
          number={number}
          setNumber={setNumber}
          data={data}
          handlers={handlers}
          meetingOptions={MEETINGS}
          greOptions={GRES}
        />
      </Form>

      <Logos src={logos} alt="Logos" />
    </Container>
  );
}

export default App;
