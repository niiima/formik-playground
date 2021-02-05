import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  mainContainer: {
    padding: theme.spacing(0),
    borderRadius: 5,
    background: "transparent",
    transition: "all 1s ease",
    "&:hover": {
      backgroundColor: "rgba(256, 256, 256, 0.7)" //#1769aa   #2196f3   #4dabf5
    }
  },
  formContainer: {
    padding: theme.spacing(3),
    background: "transparent",
    transition: "all 0.5s ease"
    // "&:hover": {
    //   backgroundColor: "rgba(256, 256, 256, 0.7)",
    // },
  },
  formHeader: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "var(--main-color)",
    marginBottom: theme.spacing(5)
  },
  stepper: {
    padding: theme.spacing(3, 0, 3),
    backgroundColor: "rgba(256, 256, 256, 0.3)",
    borderRadius: 5
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: 100,
    color: "white"
    // fontWeight: 800,
  },
  backButton: {
    color: "var(--main-color)"
    // fontWeight: 800,
  },
  wrapper: {
    margin: theme.spacing(2),
    position: "relative"
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%"
  }
}));
