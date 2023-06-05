import { makeStyles } from "@material-ui/core"

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: "rgba(0,0,0,.9)",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  logo: {
    cursor: "pointer",
    height: 50,
    color:"rgb(250, 82, 56)", 
    fontWeight:"800",
    [theme.breakpoints.down(899)]: {
      fontSize:"11px",
      fontWeight:"600",
    },
  },
  linkTobody: {
    display: props => props.isDesktop ? "block" : "none",
    position: "fixed",
    // top: "50%",
    left: "30%",
    // transform: "translate(-50%, -50%)",
    [theme.breakpoints.down(1040)]: {
      left: "25%",
      fontSize:"13px",
    },
    [theme.breakpoints.down(899)]: {
      left: "25%",
      fontSize:"12px",
    },
    [theme.breakpoints.down(773)]: {
      left: "25%",
    },
  },
  link: {
    cursor: "pointer",
    textDecoration: "none",
    color: "#fb4226",
    paddingLeft: 10,
    paddingRight: 10,
    width: "auto",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "transparent",
      color: "#fff",
      transition: "all .2s",
    }
  },
  user: {
    display: props => props.isDesktop ? "block" : "none",
  },
  auth: {
    display: "flex",
    color: props => props.isDesktop ? "#9b9b9b" : "#000",
  },
  itemAuth: {
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: "fit-content",
    "&:hover": {
      backgroundColor: "transparent",
      "& .MuiTypography-root": {
        color: "#fb4226",
      },
      "& .MuiListItemIcon-root": {
        color: "#fb4226",
      }
    },
    "& .MuiTypography-root": {
      transition: "all .2s",
    },
    "& .MuiListItemIcon-root": {
      transition: "all .2s",
    },
  },
  hover: {
    "&:hover": {
      color: "#fb4226",
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  divide: {
    fontWeight: 500,
    "&::after": {
      content: "''",
      position: "absolute",
      right: "0",
      height: "30px",
      top: "50%",
      transform: "translateY(-50%)",
      borderRight: props => props.isDesktop ? "1px solid #e9e9e9" : "none",
    }
  },
  icon: {
    minWidth: 41,
    color: "#fb4226",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  listItem: {
    "&:hover > a": {
      color: "#fb4226",
    },
    "&:hover > div": {
      color: "#fb4226",
    },
    "&:hover > span": {
      color: "#fb4226",
    },
  },
  menuIcon: {
    display: props => (props.isDesktop || props.openDrawer) ? "none" : "block",
    color:'#fb4226',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  itemMenu: {
    display: "block",
    padding: 10,
    fontWeight: 300,
    width: "100%",
    cursor: "pointer",
    fontSize: 14,
    "&:hover": {
      color: "#fff",
      backgroundColor: "#fb4226",
    },
  },
  username: {
    "& > span": {
      fontWeight: 500
    }
  }

}))
export default useStyles