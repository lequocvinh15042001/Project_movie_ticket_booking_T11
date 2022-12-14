import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  button: {
    // width: "calc(25% - 10px)",
    fontWeight: 500,
    padding: "10px 10px",
    transition: "all .2s",
    backgroundColor: "rgba(258,56,68)",
    borderRadius: "5px",
    color: "white",
    border: "1px solid #e4e4e4",
    '&:hover :first-child': {
      color: "black",
    },
    fontSize: 15,
  },
  inTime: {
    fontSize: 15,
    fontWeight: 500,
    color: "white",
  },
});
export default useStyles