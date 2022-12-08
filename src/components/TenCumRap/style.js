import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  text__first: props => ({
    color: props.color ? `${props.color}` : '#000',
    fontWeight: "500",
    fontSize: props.testSize ? props.testSize : 14,
  }),
  text__second: {
    color: "#f22222",
    fontWeight: "700",
  },
});
export default useStyles