import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  nav: {
    textAlign: "center",
    fontSize: "30pt",
  },
});

function Header() {
  const styles = useStyles();
  return (
    <>
      <nav className={styles.nav}>
        <h1>Crossword Hint Generator</h1>
      </nav>
    </>
  );
}

export default Header;
