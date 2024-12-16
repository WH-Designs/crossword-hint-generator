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

  return (
    <Card className={styles.card}>
      <CardHeader></CardHeader>
      <CardPreview>
        <form>
          <Field
            className={styles.label}
            label="What is the original prompt?"
            required
            size="large"
          >
            <Input placeholder="What is blue and has clouds" />
          </Field>
          <Field
            className={styles.label}
            label="How many letters is the word?"
            required
            size="large"
          >
            <SpinButton defaultValue={3} />
          </Field>
          <Field
            className={styles.label}
            label="How many hints would you like?"
            required
            size="large"
          >
            <SpinButton defaultValue={1} />
          </Field>
          <Field
            className={styles.label}
            label="What is one letter the word contains?"
            size="large"
          >
            <Dropdown>
              {alphabet.map((letter) => (
                <Option key={letter} value={letter}>
                  {letter}
                </Option>
              ))}
            </Dropdown>
          </Field>
        </form>
      </CardPreview>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default GeneratorHintForm;
