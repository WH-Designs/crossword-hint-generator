import {
  Dropdown,
  Field,
  Input,
  SpinButton,
  Option,
  Card,
  CardPreview,
  CardHeader,
  CardFooter,
  makeStyles,
} from "@fluentui/react-components";
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "750px",
    maxWidth: "100%",
    backgroundColor: "#3192ef",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
  label: {
    padding: "5px",
    "> label": {
      color: "#FFFFFF",
      fontFamily: "serif",
      fontSize: "15pt",
    },
  },
  submit: {
    marginTop: "10px",
    fontSize: "15pt",
    marginLeft: "5px",
  },
});

function GeneratorHintForm() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const styles = useStyles();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      prompt: "",
      letters: 3,
      hints: 1,
      letterSelect: "",
    },
  });

  function generate(data) {
    console.log(data);
  }

  return (
    <Card className={styles.card}>
      <CardHeader></CardHeader>
      <CardPreview>
        <form onSubmit={handleSubmit(generate)}>
          <Field
            className={styles.label}
            label="What is the original prompt?"
            required
            size="large"
          >
            <Input
              {...register("prompt")}
              placeholder="What is blue and has clouds"
            />
          </Field>
          <Field
            className={styles.label}
            label="How many letters is the word?"
            required
            size="large"
          >
            <SpinButton {...register("letters")} defaultValue={3} />
          </Field>
          <Field
            className={styles.label}
            label="How many hints would you like?"
            required
            size="large"
          >
            <SpinButton {...register("hints")} defaultValue={1} />
          </Field>
          <Field
            className={styles.label}
            label="What is one letter the word contains?"
            size="large"
          >
            <Dropdown
              defaultValue=""
              onOptionSelect={(_, option) =>
                setValue("letterSelect", option.optionValue)
              }
            >
              {alphabet.map((letter) => (
                <Option key={letter} value={letter}>
                  {letter}
                </Option>
              ))}
            </Dropdown>
          </Field>
          <Input className={styles.submit} type="submit" value="submit" />
        </form>
      </CardPreview>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default GeneratorHintForm;
