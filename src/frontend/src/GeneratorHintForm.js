import { Dropdown, Field, Input, SpinButton, Option } from "@fluentui/react-components";

function GeneratorHintForm() {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  return (
    <>
      <form>
        <Field label="What is the original prompt?" required>
          <Input placeholder="What is blue and has clouds" />
        </Field>
        <Field label="How many letters is the word?" required>
          <SpinButton defaultValue={3}/>
        </Field>
        <Field label="How many hints would you like?" required>
          <SpinButton defaultValue={1}/>
        </Field>
        <Field label="What is one letter the word contains?">
          <Dropdown>
            {alphabet.map((letter) =>
                <Option>{letter}</Option>
            )}
          </Dropdown>
        </Field>
      </form>
    </>
  );
}

export default GeneratorHintForm;
