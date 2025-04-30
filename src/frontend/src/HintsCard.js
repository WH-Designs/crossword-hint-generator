import {
  Card,
  CardPreview,
  CardHeader,
  CardFooter,
  makeStyles,
  Body1,
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
  submit: {
    marginTop: "10px",
    fontSize: "15pt",
    marginLeft: "5px",
  },
  div: {
    marginTop: "24px",
  },
  cardHeader: {
    fontSize: "24pt",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    textAlign: "center",
  },
});

function HintsCard() {
  const styles = useStyles();

  return (
    <div className={styles.div}>
      <Card className={styles.card}>
        <CardHeader
          className={styles.header}
          header={
            <Body1 className={styles.cardHeader}>
              <h1>Hints</h1>
            </Body1>
          }
        />
        <CardPreview></CardPreview>
        <CardFooter />
      </Card>
    </div>
  );
}

export default HintsCard;
