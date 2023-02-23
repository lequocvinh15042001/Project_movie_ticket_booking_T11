import React from "react";
import ScrollToTop from "react-scroll-up";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Footer from "./../../components/Footer/Footer";
import NavigationIcon from '@mui/icons-material/Navigation';

const useStyles = makeStyles((theme) => ({
  top: {
    marginTop: 64,
    [theme.breakpoints.down("xs")]: {
      marginTop: 56,
    },
  },
  styleScrollToTop: {
    position: "fixed",
    bottom: 30,
    right: 10,
    transitionTimingFunction: "linear",
    width: 50,
    transform: "rotate(180deg)",
    zIndex: 5000,
  },
}));
export default function MainLayout(props) {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.top}></div>
      {props.children}
      <Footer />
      <ScrollToTop showUnder={160}>
        <NavigationIcon 
        style={{color:"rgb(250, 82, 56)", width:"40px", height:"40px", 
         borderRadius:"50%", backgroundColor:"white"}}/>
      </ScrollToTop>
    </div>
  );
}