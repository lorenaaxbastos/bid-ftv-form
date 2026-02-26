import RadioGroup from "./RadioGroup";

function Section3({ data, handlers, options }) {
  const radioOptions = options.map((m) => ({
    value: m.id,
    label: m.label,
  }));

  return (
    <>
      <p>
        Por favor, indique em qual horário você irá participar de nossa formação online no
        dia 17/03/2026.
      </p>
      <RadioGroup
        name="hourSelection"
        options={radioOptions}
        value={data.selectedHour}
        onChange={(val) => handlers.setHour(val)}
        style={{ marginTop: "2rem" }}
      />
    </>
  );
}

Section3.displayName = "Section3";
export default Section3;
