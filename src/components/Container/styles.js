import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/images/background.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "90vh",
    overflowY: "auto",
    backgroundColor: theme.palette.background.default,
    zIndex: 0
  }
}));
