import HighlightBox from "./HighlightBox";
import Bold from "./Bold";
import Input from "./Input";

function Section4({ data, handlers }) {
  const cpfIncompleto = data.cpf.length > 0 && data.cpf.length < 14;

  return (
    <>
      <p>
        O próximo passo é preencher as informações a seguir para{" "}
        <Bold>registrar sua presença</Bold>.
      </p>
      <HighlightBox>
        <p>
          <Bold>Importante:</Bold> seguindo o nosso compromisso de confidencialidade, o
          registro da presença <Bold>não estará vinculado</Bold> às respostas da pesquisa
          de satisfação.
        </p>
      </HighlightBox>

      <div style={{ marginTop: "4rem" }}>
        <Input
          label="Qual é o seu nome completo?"
          placeholder="Ex: João Pedro da Silva"
          value={data.fullName}
          onChange={(e) => handlers.setFullName(e.target.value)}
          helperText="Por favor, insira seu nome exatamente como consta nos seus documentos."
          required
        />

        <Input
          label="Qual é o seu CPF?"
          placeholder="000.000.000-00"
          value={data.cpf}
          onChange={(e) => handlers.setCpf(e.target.value)}
          error={cpfIncompleto ? "CPF deve ter 11 dígitos." : ""}
          helperText="Escreva somente os números, sem pontos nem traço"
          minLength={14}
          maxLength={14}
          required
        />
        <p style={{ fontSize: "1rem", fontStyle: "italic", marginBottom: "4rem" }}>
          Essa informação é essencial para identificarmos você de forma única. Fique
          tranquila(o), seus dados serão tratados com total confidencialidade segundo os
          termos da LGPD (Lei nº 13.709/2018).
        </p>

        <Input
          label="Qual é o seu e-mail?"
          type="email"
          placeholder="seu@email.com"
          value={data.email}
          onChange={(e) => handlers.setEmail(e.target.value)}
          helperText="Informe o endereço de e-mail que você utiliza com mais frequência, pois podemos, por meio dele, entrar em contato e enviar a certificação."
          required
        />
      </div>
    </>
  );
}

Section4.displayName = "Section4";
export default Section4;
