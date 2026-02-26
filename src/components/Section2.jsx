import Checkbox from "./Checkbox";
import Link from "./Link";

function Section2({ data, handlers }) {
  return (
    <>
      <p>
        Os dados pessoais informados neste formulário, referentes ao registro de presença,
        serão tratados com intuito de acompanhamento das ações e alcance do projeto,
        conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD - 13.709/2018) e de
        acordo com a{" "}
        <Link
          href="https://www.sincronizaeducacao.com.br/politica-de-privacidade/"
          target="_blank"
        >
          Política de Privacidade
        </Link>{" "}
        e{" "}
        <Link
          href="https://www.sincronizaeducacao.com.br/termos-e-condicoes-de-uso/"
          target="_blank"
        >
          Termos de Uso
        </Link>{" "}
        da Sincroniza.
      </p>
      <p>
        Para continuar, por favor, confirme que está de acordo com nossa Política e Termos
        de uso.
      </p>
      <Checkbox
        label="Estou de acordo"
        checked={data.acceptedTerms}
        onChange={(e) => handlers.setAcceptedTerms(e.target.checked)}
      />
    </>
  );
}

Section2.displayName = "Section2";
export default Section2;
